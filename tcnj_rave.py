# Connect to Rave server and check for changes
# If Changes are found, pass them to the Visix server
# TCNJ
# Brian Bernas
# bernasb@tcnj.edu
# brianbernas@gmail.com

# Import libraries
import time
from datetime import datetime, timedelta
import hashlib
from urllib.request import urlopen, Request
from urllib.error import HTTPError

# Variables
CHECK = 15 # How frequently updates occur
VERBOSE = 0 # How much data do we display to the user

# URLs for each server
raveURL = 'https://content.getrave.com/cap/tcnj/channel1'
visixURL = 'https://axistvcm2.tcnj.edu/alert/cap.aspx?for=tcnj' # For wired white-listed VPN connections
#visixURL = 'https://tcnj-visix-1-nat.tcnj.edu/alert/cap.aspx?for=tcnj' # For wireless or standard campus network

# Hash file
hashfile = 'ravehash.txt'
rhash = ''

def read_hash_file(filename):
    try:
        f = open(filename, 'r')
        h = f.read()
        f.close()
        return h
    except FileNotFoundError:
        print("Hash file not found.")
        return ''

def write_hash_file(filename, hashstore):
    f = open (filename, 'w')
    f.write(hashstore)
    f.close()

def alert_expires(alert_text):
    """Check for a CAP expire tag, if not found, insert one."""
    pos = alert_text.find('</expires>')
    
    # If the </expires> tag is found, then just send the text back,
    # If not, then insert one that expires in 2 hours
    if pos > 1:
        if VERBOSE: print("Expires tag found.")
        return alert_text.encode()
    else:
        if VERBOSE: print("No expires tag found, creating one.")
        # Get the current date and time
        dt = datetime.now()
        # Create a time delay of 2 hours
        dta = timedelta(hours=2)
        # Add that to the date and time
        dt = dt + dta
        # Set the expire tag
        expire = "<expires>" + dt.strftime("%Y-%m-%dT%H:%M:%S") + "-5:00</expires>\n"
        # Find the <senderName> tag so we can insert the expiration before it
        pos = alert_text.find('<senderName>')
        rev_alert = alert_text[:pos] + expire + alert_text[pos:] + "\n"
        
        return rev_alert.encode()
        

def get_alerts(rave_url, visix_url):
    # Variables
    global rhash # Use global variable
    response = None
    alert = None
    visixreq = None
    nhash = None
    heads = {'User-Agent': 'Mozilla/5.0'}

    # Create the request for the Rave server
    ravereq = Request(rave_url, headers=heads)

    print("Alert updates starting. Connecting to Rave server...\n")
    
    while 1:
        time.sleep(CHECK)
        if VERBOSE: print("Checking for updates...")
        
        try:
            # Attempt to get the XML data from the Rave server
            #Response is in binary
            alert = urlopen(ravereq).read()
        
            if alert:
                print("Alert issued. Verifying content.\n")
                # Get a hash of the binary data
                nhash = hashlib.sha224(alert).hexdigest()
            
                if nhash != rhash:
                    print("Sending new alert to AxisTV Players.\n")
                    alertex = alert_expires(alert.decode())
                    print(alertex.decode())
                    # Send content to the Visix server
                    visixreq = Request(visix_url, data=alertex, headers=heads)
                    urlopen(visixreq)
                    
                    # Store the new hash
                    write_hash_file(hashfile, nhash)
                else:
                    print("This alert has already been issued.\n")
                    # Clear the text and binary data
                    alert = None
                    response = None
                
                # Copy new content hash to a stored hash
                rhash = nhash

        except HTTPError:
            if VERBOSE: print("Exception: No updates avaialable.")
            pass

def main():
    global rhash # Use global variable
    # Load the existing hash file if there is one
    rhash = read_hash_file(hashfile)
    
    # Start the alert loop
    get_alerts(raveURL, visixURL)
    print("Script has stopped running.\n")

main()
