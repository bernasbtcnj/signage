# Solstice Pod Wifi Discovery
# The College of New Jersey
# Author: Brian Bernas
#
# Last Update: 2024-01-31

import sys
import time
import getopt
import socket
from datetime import datetime

version = "0.4.0"

# SDS Server host name and port
sdsserver = "mersivesds.lions.tcnj.edu"
sdsport = 53202

# How frequently to run
checkinterval = 180

def get_sds_data(sds, port, verbose=False):
    # Connect to the Mersive SDS server and retrieve the host list
    
    # Hex command to send to the SDS server to receive the list
    # Don't ask how I figured this out. There was quite a bit of
    # reverse engineering involved
    get_hex = b'\x4d\x53\x56\x53\x44\x53\x06\x00\x00\x00\x02\x12\xda\x5b\x9f\x01'
    
    # Max size of the data buffer. This may have to change as we add more hosts.
    # Or the data will have to be appended until all the data has been received
    dsize = 4096
    
    # Blank byte-string to store the returned data
    data = b''
    
    # Create a new socket to the SDS server
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((sds, port))
    
    # Send the command to get the data and wait 1 second for a response
    sock.send(get_hex)
    time.sleep(1)
    
    # Keep getting data until 'MSVPNG' is received
    # This indicates that the SDS server has finished processing the
    # Request and is ready for a new command
    while 1:
        # Receive the data
        msv = sock.recv(dsize)
        data = data + msv
        if data.find(b'MSVPNG'):
            break
            
        # Wait 2 seconds between loop cycles
        time.sleep(2)
    
    # Print the raw data if debugging is enabled
    if verbose:
        print(data) # TESTING
        print('-' * 30)
    
    # Close the socket
    sock.close()
    
    # This is where the fun begins
    # Verify that data was received.
    if not data:
        return

    # SDS list creation
    # This is a list of tuples. Each tuple is (podname, ipaddress)
    sds_list = []
    
    # Current 'cursor' location
    loc = 0
    namebit = 0 # Integer indicating the length of the pod name
    
    # Each SDS record begins with 'MSVSDS' then has three hex nulls (00 00 00)
    # followed by some data we don't care about then a hex-encoded decimal value
    # for the length of the pod name followed by 3 more hex nulls (00, 00, 00)
    # The name of the pod and then 4 hex-encoded decimal values for the IP address
    
    # While the cusror is not at the end of the data...
    while loc < len(data):
        f = data.find(b'MSVSDS', loc) # Find the start of the next SDS listing
        
        # If a  record wasn't found, end the loop
        if f == -1:
            break
        
        # Move cursor to the found location + 1
        loc = f + 1
        f = data.find(b'\x00\x00\x00', loc) # Find the first set of nulls
        
        # If these weren't found, end the loop
        if f == -1:
            break
        
        # Find the next set of nulls
        # The hex character preceeding these indicates the length of
        # the pod name. This needs to be converted to a decimal value
        loc = f + 1
        f = data.find(b'\x00\x00\x00', loc) # Next set of nulls
        
        if f == -1:
            break
        
        # This is the name length
        namebit = int(data[f - 1])
        loc = f + 3
        
        # Get the name
        # Convert from byte data to a utf-8 string
        name = data[loc:loc + namebit].decode()
        
        # set the cursor to the end of the name
        loc = loc + namebit
        
        # Get the IP Address
        # The IP address is the next 4 hex chars in reverse order
        # Convert to a decimal and format as an IP string
        ipaddr = "%d.%d.%d.%d" % (data[loc+3], data[loc+2], data[loc+1], data[loc])
        
        # Add this pod to the list
        sds_list.append((name, ipaddr))
        
        # Move the curser to the char after the IP address
        loc = loc + 5

    return sds_list

def rev_dns_list(hostlist, verbose=False):
    # Check each IP address in the DNS server to find the
    # fully-qualified domain name (FQDN) of each solstice pod
    
    # Creat a blank list to store the hostnames
    dnslist = []
    
    # Interate through each IP address
    for host in hostlist:
        # Lookup the IP address in the DNS server
        dnsresp = socket.getnameinfo((host[1], 0), 0)
        
        # If one was found, add it to the list
        if dnsresp[0]:
            dnslist.append(dnsresp[0])
            
            if verbose:
                print("%s :\t%s :\t%s\r" %(host[0], host[1], dnsresp[0]))
    
    return dnslist

def sendping(host):
    # Wrapped in a try because these things are finicky
    # Port is fixed at 80 for now, but that may change
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, 80))
        
    except:
        print("host " + host + " failed to resond.\r")
        
    else:
        s.close()
        print(" host " + host + " connected successfully.\r")

def ping_solstice_pods(pods):
    # The time this process started
    print(datetime.now())
    
    # Fist, lets do some hostname matching
    # This is designed for the TCNJ campus network
    # Only ping hostnames that end in tcnj.edu
    suffix = '.tcnj.edu'
    
    for pod in pods:
        if not pod: continue
        
        if pod.find(suffix) > 0:
            sendping(pod)
            time.sleep(1) # Wait 1 second

def usage():
    # Tell the user how to use this thing
    print("solsticedns.py -h -v -d -i (wait interval) -s (server) -p (port) -w (wakeup time)\n\n")

def arguments():
    global sdsserver, sdsport, checkinterval
    
    try:
        opts, args = getopt.getopt(sys.argv[1:], "hvds:p:i:w:")
    except getopt.GetOptError as err:
        print(err)
        usage()
        sys.exit(2)
    
    verbose = None
    debug = None
    wake = 60
    
    for o, a in opts:
        if o == '-v':
            verbose = True
            print("Verbose mode enabled.\r")
        elif o in ('-h', '--help'):
            usage()
            sys.exit()
        elif o == '-d':
            debug = True
            print("Debugging enabled.\r")
        elif o == '-s':
            sdsserver = a
            print("SDS Server set to %s.\r" %(a))
        elif o == '-p':
            sdsport = int(a)
            print("SDS Port set to %d.\r" %(sdsport))
        elif o == '-i':
            checkinterval = int(a)
            print("Check interval set to %d minutes.\r" %(checkinterval))
        elif o == '-w':
            wake = int(a)
            print("Wake after startup time set to %d seconds.\r" %(wake))

    return (verbose, debug, wake)
    
def main():
    
    # Command line argument parsing
    opts = arguments()
    verbose = opts[0]
    debug = opts[1]
    wakeup = opts[2] # How long to wait before attempting connection
    
    # Default check Interval
    interval = checkinterval
    
    socket.setdefaulttimeout(3)
    
    # Give the system time to warm up
    print("TCNJ Solstice Pod DNS / Wifi Ping\r\r")
    print("Version " + version + "\r\r")
    print("\nGiving the wifi time to initialize...\r")
    
    time.sleep(wakeup)
    print('-' * 25)
    
    # The main check loop
    while 1:
        # Get the data from the server
        sdslist = get_sds_data(sdsserver, sdsport, debug)
    
        #DEBUG
        if debug: input()
    
        if verbose:
            for sdshost in sdslist:
                print("%s : %s" %(sdshost[0], sdshost[1]))
            print("TOTAL NUMBER OF PODS: %d\r" %(len(sdslist)))
            print('-' * 25)
    
        #DEBUG
        if debug:
            input()
            
        dnslist = rev_dns_list(sdslist, verbose)
    
        time.sleep(6) # Give things 6 seconds to settle down
        print('-' * 25)
    
        #DEBUG
        if debug: input()
    
        ping_solstice_pods(dnslist)
        
        # Wait interval before next ping
        print("Waiting %d minutes before next ping.\r" % (interval))
        time.sleep(interval * 60)

main()
