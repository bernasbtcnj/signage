var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        let Html5PlayerControls;
        (function (Html5PlayerControls) {
            Html5PlayerControls["Bottom"] = "Bottom";
            Html5PlayerControls["None"] = "None";
            Html5PlayerControls["Right"] = "Right";
        })(Html5PlayerControls = Playback.Html5PlayerControls || (Playback.Html5PlayerControls = {}));
        let Html5PlayerKind;
        (function (Html5PlayerKind) {
            Html5PlayerKind["BrightSign"] = "BrightSign";
            Html5PlayerKind["ChromeBox"] = "ChromeBox";
            Html5PlayerKind["LayoutViewer"] = "LayoutViewer";
            Html5PlayerKind["MessagePlaylistViewer"] = "MessagePlaylistViewer";
        })(Html5PlayerKind = Playback.Html5PlayerKind || (Playback.Html5PlayerKind = {}));
        let Html5TransitionDirection;
        (function (Html5TransitionDirection) {
            Html5TransitionDirection["Down"] = "Down";
            Html5TransitionDirection["DownLeft"] = "DownLeft";
            Html5TransitionDirection["DownRight"] = "DownRight";
            Html5TransitionDirection["Left"] = "Left";
            Html5TransitionDirection["Right"] = "Right";
            Html5TransitionDirection["Up"] = "Up";
            Html5TransitionDirection["UpLeft"] = "UpLeft";
            Html5TransitionDirection["UpRight"] = "UpRight";
        })(Html5TransitionDirection = Playback.Html5TransitionDirection || (Playback.Html5TransitionDirection = {}));
        let Html5TransitionKind;
        (function (Html5TransitionKind) {
            Html5TransitionKind["Cut"] = "Cut";
            Html5TransitionKind["Fade"] = "Fade";
            Html5TransitionKind["Fly"] = "Fly";
            Html5TransitionKind["Push"] = "Push";
            Html5TransitionKind["Random"] = "Random";
        })(Html5TransitionKind = Playback.Html5TransitionKind || (Playback.Html5TransitionKind = {}));
        class Html5FileContent {
            constructor() {
                this.IsDataMappedMessage = false;
                this.IsDesignedMessage = false;
                this.IsDocument = false;
                this.IsVideo = false;
                this.Size = null;
                this.Urls = [];
                this.MoreInformationUrl = null;
            }
        }
        Playback.Html5FileContent = Html5FileContent;
        class Html5PlayableItem {
            constructor() {
                this.Dwell = null;
                this.FileUrl = null;
                this.IsWebUrl = false;
                this.Transition = null;
                this.WebUrl = null;
            }
        }
        Playback.Html5PlayableItem = Html5PlayableItem;
        class Html5Transition {
            constructor() {
                this.Direction = null;
                this.Kind = Html5TransitionKind.Cut;
            }
        }
        Playback.Html5Transition = Html5Transition;
        class Html5ViewerProfile {
            constructor() {
                this.AutoPlays = true;
                this.BackgroundColor = null;
                this.Controls = Html5PlayerControls.None;
                this.ControlsColor = null;
                this.IsLayoutViewer = false;
                this.IsMaximumSize = true;
                this.Items = [];
                this.Loops = null;
                this.NoMessageText = '';
                this.NoMoreText = null;
                this.Size = null;
                this.TextColor = null;
            }
        }
        Playback.Html5ViewerProfile = Html5ViewerProfile;
        class Size_v01 {
            constructor() {
                this.Height = 0;
                this.Width = 0;
            }
        }
        Playback.Size_v01 = Size_v01;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class Is {
            static Missing(value) {
                return (value === undefined);
            }
            static Nothing(value) {
                return (value === undefined || value === null);
            }
            static Something(value) {
                return (!Is.Nothing(value));
            }
            static NoText(value) {
                let isNoText = true;
                do {
                    if (value === undefined)
                        break;
                    if (value === null)
                        break;
                    if (value.trim().length === 0)
                        break;
                    isNoText = false;
                } while (false);
                return (isNoText);
            }
            static SomeText(value) {
                return (!Is.NoText(value));
            }
        }
        Playback.Is = Is;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class Log {
            constructor() {
                this.IncludeElementAllocations = false;
                this.IncludeErrors = false;
                this.IncludeEventAllocations = false;
                this.IncludeInfo = false;
                this.IncludeStack = false;
            }
            static get Instance() {
                if (Playback.Is.Nothing(Log._Instance)) {
                    Log._Instance = new Log();
                }
                return (Log._Instance);
            }
            LogAllocElement(name) {
                do {
                    if (!this.IncludeElementAllocations)
                        break;
                    if (!Playback.Is.SomeText(name))
                        break;
                    console.log(`+Element ${name}`);
                } while (false);
            }
            LogAllocEvent(owner, eventName) {
                do {
                    if (!this.IncludeEventAllocations)
                        break;
                    if (!Playback.Is.SomeText(owner))
                        break;
                    if (!Playback.Is.SomeText(eventName))
                        break;
                    console.log(`+Event ${eventName} for ${owner}`);
                } while (false);
            }
            LogAllocTimeout(owner) {
                do {
                    if (!this.IncludeEventAllocations)
                        break;
                    if (!Playback.Is.SomeText(owner))
                        break;
                    console.log(`+Timeout for ${owner}`);
                } while (false);
            }
            LogFreeElement(name) {
                do {
                    if (!this.IncludeElementAllocations)
                        break;
                    if (!Playback.Is.SomeText(name))
                        break;
                    console.log(`-Element ${name}`);
                } while (false);
            }
            LogFreeEvent(owner, eventName) {
                do {
                    if (!this.IncludeEventAllocations)
                        break;
                    if (!Playback.Is.SomeText(owner))
                        break;
                    if (!Playback.Is.SomeText(eventName))
                        break;
                    console.log(`-Event ${eventName} for ${owner}`);
                } while (false);
            }
            LogFreeTimeout(owner) {
                do {
                    if (!this.IncludeEventAllocations)
                        break;
                    if (!Playback.Is.SomeText(owner))
                        break;
                    console.log(`-Timeout for ${owner}`);
                } while (false);
            }
            LogError(error) {
                do {
                    if (!this.IncludeErrors)
                        break;
                    if (!Playback.Is.Something(error))
                        break;
                    if (!Playback.Is.SomeText(error.message))
                        break;
                    console.log(error.message);
                    if (this.IncludeStack && Playback.Is.SomeText(error.stack)) {
                        console.log(error.stack);
                    }
                } while (false);
            }
            LogImportant(message) {
                do {
                    if (!Playback.Is.SomeText(message))
                        break;
                    console.log(message);
                } while (false);
            }
            LogInfo(info) {
                do {
                    if (!this.IncludeInfo)
                        break;
                    if (!Playback.Is.SomeText(info))
                        break;
                    console.log(info);
                } while (false);
            }
            LogValueInfo(name, value) {
                do {
                    if (!this.IncludeInfo)
                        break;
                    if (Playback.Is.NoText(name))
                        break;
                    let info = name + ' = ';
                    if (Playback.Is.Nothing(value))
                        info += 'null/undefined';
                    else if (Playback.Is.NoText(value))
                        info += 'empty string';
                    else
                        info += value.toString();
                    console.log(info);
                } while (false);
            }
        }
        Log._Instance = null;
        Playback.Log = Log;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        let CssTerms;
        (function (CssTerms) {
            CssTerms["Absolute"] = "absolute";
            CssTerms["Auto"] = "auto";
            CssTerms["Block"] = "block";
            CssTerms["BorderBox"] = "border-box";
            CssTerms["Center"] = "center";
            CssTerms["ContentBox"] = "content-box";
            CssTerms["End"] = "end";
            CssTerms["Flex"] = "flex";
            CssTerms["Hex"] = "#";
            CssTerms["Hidden"] = "hidden";
            CssTerms["Inline"] = "inline";
            CssTerms["None"] = "none";
            CssTerms["Pixel"] = "px";
            CssTerms["Relative"] = "relative";
            CssTerms["Static"] = "static";
            CssTerms["Start"] = "start";
        })(CssTerms = Playback.CssTerms || (Playback.CssTerms = {}));
        class ErrorPhrases {
            static CallFirst(name) {
                return (`Call ${name} first`);
            }
            static CallOnlyOnce(name) {
                return (`Cannot call ${name} more than once`);
            }
            static ExpectedAtLeast(name, expected) {
                return (`Expected at least ${expected} of ${name}`);
            }
            static InvalidOperation(reason) {
                return (`The operation is invalid: ${reason}`);
            }
            static IsRequired(name) {
                return (`${name} is required`);
            }
            static UnexpectedCount(name, expected, found) {
                return (`Expected ${expected} of ${name} but found ${found} instead`);
            }
            static UnexpectedEnumValue(name) {
                return (`${name} does not have an expected value`);
            }
        }
        Playback.ErrorPhrases = ErrorPhrases;
        let EventNames;
        (function (EventNames) {
            EventNames["Abort"] = "abort";
            EventNames["AnimationEnd"] = "animationend";
            EventNames["CanPlay"] = "canplay";
            EventNames["Click"] = "click";
            EventNames["Ended"] = "ended";
            EventNames["Error"] = "error";
            EventNames["Load"] = "load";
            EventNames["Resize"] = "resize";
            EventNames["Timeout"] = "timeout";
        })(EventNames = Playback.EventNames || (Playback.EventNames = {}));
        let FileParts;
        (function (FileParts) {
            FileParts["Content"] = "content";
            FileParts["IconLibrary"] = "iconlibrary.txt";
            FileParts["JsonExtension"] = ".json";
            FileParts["PlaybackText"] = "PlaybackText";
            FileParts["Profiles"] = "profiles";
            FileParts["SvgDataUrlFragment"] = "data:image/svg+xml,";
        })(FileParts = Playback.FileParts || (Playback.FileParts = {}));
        let HttpMethods;
        (function (HttpMethods) {
            HttpMethods["Delete"] = "DELETE";
            HttpMethods["Get"] = "GET";
            HttpMethods["Post"] = "POST";
            HttpMethods["Put"] = "PUT";
        })(HttpMethods = Playback.HttpMethods || (Playback.HttpMethods = {}));
        class HttpStatuses {
        }
        HttpStatuses.Success = 200;
        Playback.HttpStatuses = HttpStatuses;
        let Intervals;
        (function (Intervals) {
            Intervals[Intervals["ContentRefresh"] = 900000] = "ContentRefresh";
            Intervals[Intervals["NoContentRefresh"] = 300000] = "NoContentRefresh";
            Intervals[Intervals["NotificationDelay"] = 10] = "NotificationDelay";
            Intervals[Intervals["StandardCompletionDelay"] = 10] = "StandardCompletionDelay";
        })(Intervals = Playback.Intervals || (Playback.Intervals = {}));
        let LogLevel;
        (function (LogLevel) {
            LogLevel["ElementAlloc"] = "-2";
            LogLevel["EventAlloc"] = "-1";
            LogLevel["Errors"] = "1";
            LogLevel["Info"] = "3";
            LogLevel["Stack"] = "2";
        })(LogLevel = Playback.LogLevel || (Playback.LogLevel = {}));
        let TagNames;
        (function (TagNames) {
            TagNames["Div"] = "div";
            TagNames["H1"] = "h1";
            TagNames["Iframe"] = "iframe";
            TagNames["Image"] = "img";
            TagNames["Style"] = "style";
            TagNames["Video"] = "video";
        })(TagNames = Playback.TagNames || (Playback.TagNames = {}));
        let TextValues;
        (function (TextValues) {
            TextValues["SvgPrimaryFillColorMacro"] = "%fillcolor%";
            TextValues["SvgLibraryDelim"] = "{63087228-ED03-4869-A327-0C9E173EBF9F}";
        })(TextValues = Playback.TextValues || (Playback.TextValues = {}));
        let TransitionSelectorSuffixes;
        (function (TransitionSelectorSuffixes) {
            TransitionSelectorSuffixes["FadeIn"] = "-fadein";
            TransitionSelectorSuffixes["FadeOut"] = "-fadeout";
            TransitionSelectorSuffixes["FlyInDown"] = "-flyindown";
            TransitionSelectorSuffixes["FlyInDownLeft"] = "-flyindownleft";
            TransitionSelectorSuffixes["FlyInDownRight"] = "-flyindownright";
            TransitionSelectorSuffixes["FlyInLeft"] = "-flyinleft";
            TransitionSelectorSuffixes["FlyInRight"] = "-flyinright";
            TransitionSelectorSuffixes["FlyInUp"] = "-flyinup";
            TransitionSelectorSuffixes["FlyInUpLeft"] = "-flyinupleft";
            TransitionSelectorSuffixes["FlyInUpRight"] = "-flyinupright";
            TransitionSelectorSuffixes["FlyOutDown"] = "-flyoutdown";
            TransitionSelectorSuffixes["FlyOutDownLeft"] = "-flyoutdownleft";
            TransitionSelectorSuffixes["FlyOutDownRight"] = "-flyoutdownright";
            TransitionSelectorSuffixes["FlyOutLeft"] = "-flyoutleft";
            TransitionSelectorSuffixes["FlyOutRight"] = "-flyoutright";
            TransitionSelectorSuffixes["FlyOutUp"] = "-flyoutup";
            TransitionSelectorSuffixes["FlyOutUpLeft"] = "-flyoutupleft";
            TransitionSelectorSuffixes["FlyOutUpRight"] = "-flyoutupright";
            TransitionSelectorSuffixes["OffStage"] = "-offstage";
            TransitionSelectorSuffixes["OnStage"] = "-onstage";
        })(TransitionSelectorSuffixes = Playback.TransitionSelectorSuffixes || (Playback.TransitionSelectorSuffixes = {}));
        let TransitionValues;
        (function (TransitionValues) {
            TransitionValues[TransitionValues["DirectionCount"] = 8] = "DirectionCount";
            TransitionValues[TransitionValues["NonRandomTransitionCount"] = 4] = "NonRandomTransitionCount";
        })(TransitionValues = Playback.TransitionValues || (Playback.TransitionValues = {}));
        let UiMetrics;
        (function (UiMetrics) {
            UiMetrics[UiMetrics["ButtonBarButtonPadding"] = 32] = "ButtonBarButtonPadding";
            UiMetrics[UiMetrics["ButtonBarButtonSize"] = 32] = "ButtonBarButtonSize";
            UiMetrics[UiMetrics["ButtonBarFixedDimension"] = 64] = "ButtonBarFixedDimension";
        })(UiMetrics = Playback.UiMetrics || (Playback.UiMetrics = {}));
        let UrlFlagNames;
        (function (UrlFlagNames) {
            UrlFlagNames["DebugRoot"] = "d";
            UrlFlagNames["LogLevel"] = "l";
            UrlFlagNames["NoCache"] = "nc";
            UrlFlagNames["Profile"] = "id";
            UrlFlagNames["Tenant"] = "t";
        })(UrlFlagNames = Playback.UrlFlagNames || (Playback.UrlFlagNames = {}));
        let WindowNames;
        (function (WindowNames) {
            WindowNames["Blank"] = "_blank";
        })(WindowNames = Playback.WindowNames || (Playback.WindowNames = {}));
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class Next {
            static DomIdSuffix() {
                let next = this._LastDomIdSuffix.toString();
                this._LastDomIdSuffix++;
                return (next);
            }
            static UrlCacheBlocker() {
                return (Date.now().toString());
            }
            static UrlWithCacheBlocking(url) {
                if (Playback.Is.NoText(url))
                    throw new Error(Playback.ErrorPhrases.IsRequired('url'));
                let realUrl = new URL(url);
                if (Playback.Is.SomeText(realUrl.search))
                    realUrl.search += '&' + Playback.UrlFlagNames.NoCache + '=' + Next.UrlCacheBlocker();
                else
                    realUrl.search = '?' + Playback.UrlFlagNames.NoCache + '=' + Next.UrlCacheBlocker();
                return (realUrl.href);
            }
        }
        Next._LastDomIdSuffix = 0;
        Playback.Next = Next;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiEventListener {
            constructor() {
                this.Handler = null;
                this.HandlersThis = null;
                this._DomElement = null;
                this._EventName = '';
                this._HttpRequest = null;
                this._IsWindowEvent = false;
            }
            static FactoryForDom(domElement, eventName, handler, handlersThis) {
                if (Playback.Is.Nothing(domElement))
                    throw new Error(Playback.ErrorPhrases.IsRequired('domElement'));
                if (Playback.Is.NoText(eventName))
                    throw new Error(Playback.ErrorPhrases.IsRequired('eventName'));
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                let listener = new UiEventListener();
                listener._DomElement = domElement;
                listener._EventName = eventName;
                listener.Handler = handler;
                listener.HandlersThis = handlersThis;
                domElement.addEventListener(eventName, listener);
                Playback.Log.Instance.LogAllocEvent(listener._DomElement.id, listener._EventName);
                return (listener);
            }
            static FactoryForHttp(httpRequest, eventName, handler, handlersThis) {
                if (Playback.Is.Nothing(httpRequest))
                    throw new Error(Playback.ErrorPhrases.IsRequired('httpRequest'));
                if (Playback.Is.NoText(eventName))
                    throw new Error(Playback.ErrorPhrases.IsRequired('eventName'));
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                let listener = new UiEventListener();
                listener._HttpRequest = httpRequest;
                listener._EventName = eventName;
                listener.Handler = handler;
                listener.HandlersThis = handlersThis;
                httpRequest.addEventListener(eventName, listener);
                Playback.Log.Instance.LogAllocEvent('HttpRequest', listener._EventName);
                return (listener);
            }
            static FactoryForWindow(eventName, handler, handlersThis) {
                if (Playback.Is.NoText(eventName))
                    throw new Error(Playback.ErrorPhrases.IsRequired('eventName'));
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                let listener = new UiEventListener();
                listener._IsWindowEvent = true;
                listener._EventName = eventName;
                listener.Handler = handler;
                listener.HandlersThis = handlersThis;
                window.addEventListener(eventName, listener);
                Playback.Log.Instance.LogAllocEvent('window', eventName);
                return (listener);
            }
            Dispose() {
                if (Playback.Is.Something(this._DomElement)) {
                    this._DomElement.removeEventListener(this._EventName, this);
                    Playback.Log.Instance.LogFreeEvent(this._DomElement.id, this._EventName);
                    this._DomElement = null;
                }
                else if (Playback.Is.Something(this._HttpRequest)) {
                    this._HttpRequest.removeEventListener(this._EventName, this);
                    Playback.Log.Instance.LogFreeEvent('HttpRequest', this._EventName);
                    this._HttpRequest = null;
                }
                else {
                    window.removeEventListener(this._EventName, this);
                    Playback.Log.Instance.LogFreeEvent('window', this._EventName);
                }
                this.Handler = null;
                this.HandlersThis = null;
            }
            handleEvent(event) {
                if (Playback.Is.Something(this.Handler) && Playback.Is.Something(this.HandlersThis)) {
                    this.Handler.call(this.HandlersThis, event);
                }
            }
        }
        Playback.UiEventListener = UiEventListener;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        let UiBoxKind;
        (function (UiBoxKind) {
            UiBoxKind[UiBoxKind["Block"] = 0] = "Block";
            UiBoxKind[UiBoxKind["Flex"] = 1] = "Flex";
            UiBoxKind[UiBoxKind["Inline"] = 2] = "Inline";
        })(UiBoxKind = Playback.UiBoxKind || (Playback.UiBoxKind = {}));
        class UiColor {
            constructor(a, r, g, b) {
                this._A = 255;
                this._R = 0;
                this._G = 0;
                this._B = 0;
                if (Playback.Is.Something(a))
                    this.A = a;
                if (Playback.Is.Something(r))
                    this.R = r;
                if (Playback.Is.Something(g))
                    this.G = g;
                if (Playback.Is.Something(b))
                    this.B = b;
            }
            static FromRgbaString(rgba) {
                if (Playback.Is.NoText(rgba))
                    throw new Error(Playback.ErrorPhrases.IsRequired('rgba'));
                rgba = rgba.trim();
                if ((rgba.length !== 9 && rgba.length !== 7) || rgba[0] !== '#')
                    throw new Error('rgba must be in form #rrggbbaa or #rrggbb');
                let r = Number.parseInt(rgba.substr(1, 2), 16);
                let g = Number.parseInt(rgba.substr(3, 2), 16);
                let b = Number.parseInt(rgba.substr(5, 2), 16);
                let a = 255;
                if (rgba.length === 7)
                    a = Number.parseInt(rgba.substr(7, 2), 16);
                return (new UiColor(a, r, g, b));
            }
            get A() { return (this._A); }
            set A(a) {
                if (a < 0)
                    this._A = 0;
                else if (a > 255)
                    this._A = 255;
                else
                    this._A = a;
            }
            get R() { return (this._R); }
            set R(r) {
                if (r < 0)
                    this._R = 0;
                else if (r > 255)
                    this._R = 255;
                else
                    this._R = r;
            }
            get G() { return (this._G); }
            set G(g) {
                if (g < 0)
                    this._G = 0;
                else if (g > 255)
                    this._G = 255;
                else
                    this._G = g;
            }
            get B() { return (this._B); }
            set B(b) {
                if (b < 0)
                    this._B = 0;
                else if (b > 255)
                    this._B = 255;
                else
                    this._B = b;
            }
            get CssColor() {
                let r = this._R.toString(16);
                let g = this._G.toString(16);
                let b = this._B.toString(16);
                let a = this._A.toString(16);
                let color = Playback.CssTerms.Hex;
                if (r.length < 2)
                    color += '0';
                color += r;
                if (g.length < 2)
                    color += '0';
                color += g;
                if (b.length < 2)
                    color += '0';
                color += b;
                if (a.length < 2)
                    color += '0';
                color += a;
                return (color);
            }
        }
        Playback.UiColor = UiColor;
        let UiLayoutStrategy;
        (function (UiLayoutStrategy) {
            UiLayoutStrategy[UiLayoutStrategy["Near"] = 0] = "Near";
            UiLayoutStrategy[UiLayoutStrategy["Middle"] = 1] = "Middle";
            UiLayoutStrategy[UiLayoutStrategy["Far"] = 2] = "Far";
        })(UiLayoutStrategy = Playback.UiLayoutStrategy || (Playback.UiLayoutStrategy = {}));
        let UiPlacementStrategy;
        (function (UiPlacementStrategy) {
            UiPlacementStrategy[UiPlacementStrategy["AsRoot"] = 0] = "AsRoot";
            UiPlacementStrategy[UiPlacementStrategy["ByCoord"] = 1] = "ByCoord";
            UiPlacementStrategy[UiPlacementStrategy["ByFlow"] = 2] = "ByFlow";
        })(UiPlacementStrategy = Playback.UiPlacementStrategy || (Playback.UiPlacementStrategy = {}));
        class UiSettings {
            constructor(domElement) {
                this._DomElement = null;
                this._AppliedBackground = null;
                this._AppliedBoxKind = null;
                this._AppliedCanScrollX = null;
                this._AppliedCanScrollY = null;
                this._AppliedCssClass = null;
                this._AppliedFlexChildHorzLayout = null;
                this._AppliedFlexChildVertLayout = null;
                this._AppliedForeground = null;
                this._AppliedHeight = null;
                this._AppliedIgnoreCoord = null;
                this._AppliedIsHidden = null;
                this._AppliedMargin = null;
                this._AppliedPadding = null;
                this._AppliedPlacement = null;
                this._AppliedWidth = null;
                this._AppliedX = null;
                this._AppliedY = null;
                this._SetBackground = null;
                this._SetBoxKind = UiBoxKind.Block;
                this._SetCanScrollX = false;
                this._SetCanScrollY = false;
                this._SetCssClass = null;
                this._SetFlexChildHorzLayout = null;
                this._SetFlexChildVertLayout = null;
                this._SetForeground = null;
                this._SetHeight = null;
                this._SetIgnoreCoord = false;
                this._SetIsHidden = false;
                this._SetMargin = null;
                this._SetPadding = null;
                this._SetPlacement = UiPlacementStrategy.ByFlow;
                this._SetWidth = null;
                this._SetX = null;
                this._SetY = null;
                if (Playback.Is.Nothing(domElement))
                    throw new Error(Playback.ErrorPhrases.IsRequired('domElement'));
                this._DomElement = domElement;
            }
            Dispose() {
                if (Playback.Is.Something(this._DomElement))
                    this._DomElement = null;
                this._AppliedBackground = null;
                this._AppliedBoxKind = null;
                this._AppliedCanScrollX = null;
                this._AppliedCanScrollY = null;
                this._AppliedCssClass = null;
                this._AppliedFlexChildHorzLayout = null;
                this._AppliedFlexChildVertLayout = null;
                this._AppliedForeground = null;
                this._AppliedHeight = null;
                this._AppliedIgnoreCoord = null;
                this._AppliedIsHidden = null;
                this._AppliedMargin = null;
                this._AppliedPadding = null;
                this._AppliedPlacement = null;
                this._AppliedWidth = null;
                this._AppliedX = null;
                this._AppliedY = null;
                this._SetBackground = null;
                this._SetBoxKind = null;
                this._SetCanScrollX = null;
                this._SetCanScrollY = null;
                this._SetCssClass = null;
                this._SetFlexChildHorzLayout = null;
                this._SetFlexChildVertLayout = null;
                this._SetForeground = null;
                this._SetHeight = null;
                this._SetIgnoreCoord = null;
                this._SetIsHidden = null;
                this._SetMargin = null;
                this._SetPadding = null;
                this._SetPlacement = null;
                this._SetWidth = null;
                this._SetX = null;
                this._SetY = null;
            }
            get Background() { return (this._SetBackground); }
            set Background(value) { this._SetBackground = value; }
            get BoxKind() { return (this._SetBoxKind); }
            set BoxKind(value) { this._SetBoxKind = value; }
            get CanScrollX() { return (this._SetCanScrollX); }
            set CanScrollX(value) { this._SetCanScrollX = value; }
            get CanScrollY() { return (this._SetCanScrollY); }
            set CanScrollY(value) { this._SetCanScrollY = value; }
            get CssClass() { return (this._SetCssClass); }
            set CssClass(value) { this._SetCssClass = value; }
            get FlexChildHorzLayout() { return (this._SetFlexChildHorzLayout); }
            set FlexChildHorzLayout(value) { this._SetFlexChildHorzLayout = value; }
            get FlexChildVertLayout() { return (this._SetFlexChildVertLayout); }
            set FlexChildVertLayout(value) { this._SetFlexChildVertLayout = value; }
            get Foreground() { return (this._SetForeground); }
            set Foreground(value) { this._SetForeground = value; }
            get Height() { return (this._SetHeight); }
            set Height(value) { this._SetHeight = value; }
            get IgnoreCoord() { return (this._SetIgnoreCoord); }
            set IgnoreCoord(value) { this._SetIgnoreCoord = value; }
            get IsHidden() { return (this._SetIsHidden); }
            set IsHidden(value) { this._SetIsHidden = value; }
            get Margin() { return (this._SetMargin); }
            set Margin(value) { this._SetMargin = value; }
            get Padding() { return (this._SetPadding); }
            set Padding(value) { this._SetPadding = value; }
            get Placement() { return (this._SetPlacement); }
            set Placement(value) { this._SetPlacement = value; }
            get Width() { return (this._SetWidth); }
            set Width(value) { this._SetWidth = value; }
            get X() { return (this._SetX); }
            set X(value) { this._SetX = value; }
            get Y() { return (this._SetY); }
            set Y(value) { this._SetY = value; }
            Apply() {
                if (Playback.Is.Something(this._DomElement)) {
                    if (this._AppliedBackground !== this._SetBackground) {
                        this._AppliedBackground = this._SetBackground;
                        this._DomElement.style.backgroundColor =
                            Playback.Is.Something(this._AppliedBackground) ? this._AppliedBackground.CssColor : null;
                    }
                    if (this._AppliedCanScrollX !== this._SetCanScrollX) {
                        this._AppliedCanScrollX = this._SetCanScrollX;
                        this._DomElement.style.overflowX = (this._AppliedCanScrollX === true) ? Playback.CssTerms.Auto : Playback.CssTerms.Hidden;
                    }
                    if (this._AppliedCanScrollY !== this._SetCanScrollY) {
                        this._AppliedCanScrollY = this._SetCanScrollY;
                        this._DomElement.style.overflowY = (this._AppliedCanScrollY === true) ? Playback.CssTerms.Auto : Playback.CssTerms.Hidden;
                    }
                    if (this._AppliedCssClass !== this._SetCssClass) {
                        this._AppliedCssClass = this._SetCssClass;
                        this._DomElement.className = Playback.Is.SomeText(this._AppliedCssClass) ? this._AppliedCssClass : '';
                    }
                    if (this._AppliedForeground !== this._SetForeground) {
                        this._AppliedForeground = this._SetForeground;
                        this._DomElement.style.color =
                            Playback.Is.Something(this._AppliedForeground) ? this._AppliedForeground.CssColor : null;
                    }
                    if (this._AppliedIsHidden !== this._SetIsHidden) {
                        this._AppliedIsHidden = this._SetIsHidden;
                        if (this._AppliedIsHidden)
                            this._DomElement.style.display = Playback.CssTerms.None;
                        else {
                            this._AppliedBoxKind = null;
                        }
                    }
                    if (this._AppliedIsHidden !== true &&
                        this._AppliedBoxKind !== this._SetBoxKind) {
                        this._AppliedBoxKind = this._SetBoxKind;
                        switch (this._AppliedBoxKind) {
                            case UiBoxKind.Block:
                                {
                                    this._DomElement.style.display = Playback.CssTerms.Block;
                                    this._DomElement.style.boxSizing = Playback.CssTerms.BorderBox;
                                    this._DomElement.style.justifyContent = '';
                                    this._DomElement.style.alignItems = '';
                                    break;
                                }
                            case UiBoxKind.Flex:
                                {
                                    this._DomElement.style.display = Playback.CssTerms.Flex;
                                    this._DomElement.style.boxSizing = Playback.CssTerms.BorderBox;
                                    break;
                                }
                            case UiBoxKind.Inline:
                                {
                                    this._DomElement.style.display = Playback.CssTerms.Inline;
                                    this._DomElement.style.boxSizing = Playback.CssTerms.ContentBox;
                                    this._DomElement.style.justifyContent = '';
                                    this._DomElement.style.alignItems = '';
                                    break;
                                }
                        }
                    }
                    if (this._AppliedBoxKind === UiBoxKind.Flex &&
                        this._AppliedFlexChildHorzLayout !== this._SetFlexChildHorzLayout) {
                        this._AppliedFlexChildHorzLayout = this._SetFlexChildHorzLayout;
                        if (Playback.Is.Nothing(this._AppliedFlexChildHorzLayout))
                            this._DomElement.style.justifyContent = '';
                        else {
                            switch (this._AppliedFlexChildHorzLayout) {
                                case UiLayoutStrategy.Far:
                                    {
                                        this._DomElement.style.justifyContent = Playback.CssTerms.End;
                                        break;
                                    }
                                case UiLayoutStrategy.Middle:
                                    {
                                        this._DomElement.style.justifyContent = Playback.CssTerms.Center;
                                        break;
                                    }
                                case UiLayoutStrategy.Near:
                                    {
                                        this._DomElement.style.justifyContent = Playback.CssTerms.Start;
                                        break;
                                    }
                            }
                        }
                    }
                    if (this._AppliedBoxKind === UiBoxKind.Flex &&
                        this._AppliedFlexChildVertLayout !== this._SetFlexChildVertLayout) {
                        this._AppliedFlexChildVertLayout = this._SetFlexChildVertLayout;
                        if (Playback.Is.Nothing(this._AppliedFlexChildVertLayout))
                            this._DomElement.style.alignItems = '';
                        else {
                            switch (this._AppliedFlexChildVertLayout) {
                                case UiLayoutStrategy.Far:
                                    {
                                        this._DomElement.style.alignItems = Playback.CssTerms.End;
                                        break;
                                    }
                                case UiLayoutStrategy.Middle:
                                    {
                                        this._DomElement.style.alignItems = Playback.CssTerms.Center;
                                        break;
                                    }
                                case UiLayoutStrategy.Near:
                                    {
                                        this._DomElement.style.alignItems = Playback.CssTerms.Start;
                                        break;
                                    }
                            }
                        }
                    }
                    if (this._AppliedMargin !== this._SetMargin) {
                        this._AppliedMargin = this._SetMargin;
                        this._DomElement.style.marginLeft =
                            Playback.Is.Something(this._AppliedMargin.Left) ? this._AppliedMargin.Left.toString() + Playback.CssTerms.Pixel : '0';
                        this._DomElement.style.marginTop =
                            Playback.Is.Something(this._AppliedMargin.Top) ? this._AppliedMargin.Top.toString() + Playback.CssTerms.Pixel : '0';
                        this._DomElement.style.marginRight =
                            Playback.Is.Something(this._AppliedMargin.Right) ? this._AppliedMargin.Right.toString() + Playback.CssTerms.Pixel : '0';
                        this._DomElement.style.marginBottom =
                            Playback.Is.Something(this._AppliedMargin.Bottom) ? this._AppliedMargin.Bottom.toString() + Playback.CssTerms.Pixel : '0';
                    }
                    if (this._AppliedPadding !== this._SetPadding) {
                        this._AppliedPadding = this._SetPadding;
                        this._DomElement.style.paddingLeft =
                            Playback.Is.Something(this._AppliedPadding.Left) ? this._AppliedPadding.Left.toString() + Playback.CssTerms.Pixel : '0';
                        this._DomElement.style.paddingTop =
                            Playback.Is.Something(this._AppliedPadding.Top) ? this._AppliedPadding.Top.toString() + Playback.CssTerms.Pixel : '0';
                        this._DomElement.style.paddingRight =
                            Playback.Is.Something(this._AppliedPadding.Right) ? this._AppliedPadding.Right.toString() + Playback.CssTerms.Pixel : '0';
                        this._DomElement.style.paddingBottom =
                            Playback.Is.Something(this._AppliedPadding.Bottom) ? this._AppliedPadding.Bottom.toString() + Playback.CssTerms.Pixel : '0';
                    }
                    if (this._AppliedPlacement !== this._SetPlacement) {
                        this._AppliedPlacement = this._SetPlacement;
                        switch (this._AppliedPlacement) {
                            case UiPlacementStrategy.AsRoot: {
                                this._DomElement.style.position = Playback.CssTerms.Relative;
                                break;
                            }
                            case UiPlacementStrategy.ByCoord: {
                                this._DomElement.style.position = Playback.CssTerms.Absolute;
                                break;
                            }
                            default: {
                                this._DomElement.style.position = Playback.CssTerms.Static;
                                break;
                            }
                        }
                    }
                    if (this._AppliedIgnoreCoord !== this._SetIgnoreCoord) {
                        this._AppliedIgnoreCoord = this._SetIgnoreCoord;
                        if (this._AppliedIgnoreCoord === true) {
                            this._DomElement.style.left = '';
                            this._DomElement.style.top = '';
                            this._DomElement.style.width = '';
                            this._DomElement.style.height = '';
                        }
                    }
                    if (this._AppliedPlacement === UiPlacementStrategy.ByCoord) {
                        if (this._AppliedX !== this._SetX) {
                            this._AppliedX = this._SetX;
                            if (this._AppliedIgnoreCoord !== true) {
                                this._DomElement.style.left =
                                    Playback.Is.Something(this._AppliedX) ? this._AppliedX.toString() + Playback.CssTerms.Pixel : Playback.CssTerms.Auto;
                            }
                        }
                        if (this._AppliedY !== this._SetY) {
                            this._AppliedY = this._SetY;
                            if (this._AppliedIgnoreCoord !== true) {
                                this._DomElement.style.top =
                                    Playback.Is.Something(this._AppliedY) ? this._AppliedY.toString() + Playback.CssTerms.Pixel : Playback.CssTerms.Auto;
                            }
                        }
                    }
                    if (this._AppliedHeight !== this._SetHeight) {
                        this._AppliedHeight = this._SetHeight;
                        if (this._AppliedIgnoreCoord !== true) {
                            this._DomElement.style.height =
                                Playback.Is.Something(this._AppliedHeight) ? this._AppliedHeight.toString() + Playback.CssTerms.Pixel : Playback.CssTerms.Auto;
                        }
                    }
                    if (this._AppliedWidth !== this._SetWidth) {
                        this._AppliedWidth = this._SetWidth;
                        if (this._AppliedIgnoreCoord !== true) {
                            this._DomElement.style.width =
                                Playback.Is.Something(this._AppliedWidth) ? this._AppliedWidth.toString() + Playback.CssTerms.Pixel : Playback.CssTerms.Auto;
                        }
                    }
                }
            }
        }
        Playback.UiSettings = UiSettings;
        class UiThickness {
            constructor(left, top, right, bottom) {
                this._Left = 0;
                this._Top = 0;
                this._Right = 0;
                this._Bottom = 0;
                if (Playback.Is.Something(left))
                    this.Left = left;
                if (Playback.Is.Something(top))
                    this.Top = top;
                if (Playback.Is.Something(right))
                    this.Right = right;
                if (Playback.Is.Something(bottom))
                    this.Bottom = bottom;
            }
            static Uniform(thickness) {
                return (new UiThickness(thickness, thickness, thickness, thickness));
            }
            static HorzVert(horizontal, vertical) {
                return (new UiThickness(horizontal, vertical, horizontal, vertical));
            }
            get Left() { return (this._Left); }
            set Left(value) { if (Playback.Is.Something(value))
                this._Left = value; }
            get Top() { return (this._Top); }
            set Top(value) { if (Playback.Is.Something(value))
                this._Top = value; }
            get Right() { return (this._Right); }
            set Right(value) { if (Playback.Is.Something(value))
                this._Right = value; }
            get Bottom() { return (this._Bottom); }
            set Bottom(value) { if (Playback.Is.Something(value))
                this._Bottom = value; }
        }
        Playback.UiThickness = UiThickness;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiElement {
            constructor() {
                this.OnDispose = null;
                this.OnValidate = null;
                this._Children = [];
                this._DomElement = null;
                this._DomEvents = [];
                this._IsExistingElement = false;
                this._Parent = null;
                this._Settings = null;
            }
            Dispose() {
                if (!this._IsExistingElement && Playback.Is.SomeText(this.Id)) {
                    Playback.Log.Instance.LogFreeElement(this.Id);
                }
                if (Playback.Is.Something(this._DomEvents)) {
                    for (const domEvent of this._DomEvents) {
                        try {
                            domEvent.Dispose();
                        }
                        catch (dex) {
                            Playback.Log.Instance.LogError(dex);
                        }
                    }
                }
                if (Playback.Is.Something(this.OnDispose)) {
                    try {
                        this.OnDispose();
                    }
                    catch (dex) {
                        Playback.Log.Instance.LogError(dex);
                    }
                }
                if (!this._IsExistingElement &&
                    Playback.Is.Something(this._Parent) &&
                    Playback.Is.Something(this._Parent._DomElement) &&
                    Playback.Is.Something(this._DomElement)) {
                    if (this._Parent._DomElement.contains(this._DomElement)) {
                        this._Parent._DomElement.removeChild(this._DomElement);
                    }
                }
                if (Playback.Is.Something(this._Children)) {
                    for (const child of this._Children) {
                        if (!this._IsExistingElement)
                            child._Parent = null;
                        try {
                            child.Dispose();
                        }
                        catch (dex) {
                            Playback.Log.Instance.LogError(dex);
                        }
                    }
                }
                this._DomElement = null;
                this._DomEvents = null;
                this._Settings = null;
                this._Children = null;
                this._Parent = null;
            }
            get Children() { return (this._Children); }
            get DomElement() { return (this._DomElement); }
            get DomEvents() { return (this._DomEvents); }
            get Id() { return (Playback.Is.Something(this._DomElement) ? this._DomElement.id : null); }
            get Parent() { return (this._Parent); }
            get Settings() { return (this._Settings); }
            AddChild(child) {
                if (Playback.Is.Nothing(child))
                    throw new Error(Playback.ErrorPhrases.IsRequired('child'));
                this.TestHasDomElement();
                child._Parent = this;
                this.Children.push(child);
                this._DomElement.appendChild(child._DomElement);
                child.Validate();
            }
            RemoveChild(child, dispose) {
                if (Playback.Is.Nothing(child))
                    throw new Error(Playback.ErrorPhrases.IsRequired('child'));
                if (Playback.Is.Nothing(dispose))
                    throw new Error(Playback.ErrorPhrases.IsRequired('dispose'));
                this.TestHasDomElement();
                let found = false;
                let index = this.Children.indexOf(child);
                if (index > -1) {
                    found = true;
                    this.Children.splice(index, 1);
                    child._Parent = null;
                    if (Playback.Is.Something(child._DomElement)) {
                        if (this._DomElement.contains(child._DomElement) && this._DomElement !== child._DomElement) {
                            this._DomElement.removeChild(child._DomElement);
                        }
                    }
                    if (dispose) {
                        child.Dispose();
                    }
                }
                return (found);
            }
            RemoveChildById(id, dispose) {
                if (Playback.Is.NoText(id))
                    throw new Error(Playback.ErrorPhrases.IsRequired('id'));
                this.TestHasDomElement();
                let found = false;
                for (const child of this.Children) {
                    if (child.Id === id) {
                        found = this.RemoveChild(child, dispose);
                        break;
                    }
                }
                return (found);
            }
            RemoveDomEvent(event, dispose) {
                if (Playback.Is.Nothing(event))
                    throw new Error(Playback.ErrorPhrases.IsRequired('event'));
                if (Playback.Is.Nothing(dispose))
                    throw new Error(Playback.ErrorPhrases.IsRequired('dispose'));
                let found = false;
                let index = this.DomEvents.indexOf(event);
                if (index > -1) {
                    found = true;
                    this.DomEvents.splice(index, 1);
                    if (dispose) {
                        event.Dispose();
                    }
                }
                return (found);
            }
            Validate() {
                if (Playback.Is.Something(this._Settings))
                    this._Settings.Apply();
                if (Playback.Is.Something(this.OnValidate)) {
                    try {
                        this.OnValidate();
                    }
                    catch (dex) {
                        Playback.Log.Instance.LogError(dex);
                    }
                }
                if (Playback.Is.Something(this._Children)) {
                    for (const child of this._Children) {
                        if (Playback.Is.Something(child))
                            child.Validate();
                    }
                }
            }
            Attach(domElement, settings) {
                if (Playback.Is.Nothing(domElement))
                    throw new Error(Playback.ErrorPhrases.IsRequired('domElement'));
                this._IsExistingElement = true;
                this._DomElement = domElement;
                this._Settings = settings !== null && settings !== void 0 ? settings : new Playback.UiSettings(domElement);
                this.Validate();
            }
            GenerateId(baseId) {
                if (Playback.Is.NoText(baseId))
                    throw new Error(Playback.ErrorPhrases.IsRequired('baseId'));
                return (baseId + Playback.Next.DomIdSuffix().toString());
            }
            Instantiate(tagName, id, boxKind, isByCoord) {
                if (Playback.Is.NoText(tagName))
                    throw new Error(Playback.ErrorPhrases.IsRequired('tagName'));
                if (Playback.Is.NoText(id))
                    throw new Error(Playback.ErrorPhrases.IsRequired('id'));
                if (Playback.Is.Nothing(boxKind))
                    throw new Error(Playback.ErrorPhrases.IsRequired('boxKind'));
                this._DomElement = document.createElement(tagName);
                this._DomElement.id = id;
                this._Settings = new Playback.UiSettings(this._DomElement);
                this._Settings.BoxKind = boxKind;
                this._Settings.Placement = isByCoord ? Playback.UiPlacementStrategy.ByCoord : Playback.UiPlacementStrategy.ByFlow;
                Playback.Log.Instance.LogAllocElement(id);
            }
            TestHasDomElement() {
                if (Playback.Is.Nothing(this._DomElement)) {
                    throw new Error(Playback.ErrorPhrases.InvalidOperation('the UiElement has no DOM element'));
                }
            }
        }
        Playback.UiElement = UiElement;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiRoot extends Playback.UiElement {
            constructor(elementId) {
                super();
                let element = Playback.Is.SomeText(elementId) ? document.getElementById(elementId) : document.body;
                let settings = new Playback.UiSettings(element);
                settings.Placement = Playback.UiPlacementStrategy.AsRoot;
                settings.BoxKind = Playback.UiBoxKind.Block;
                this.Attach(element, settings);
            }
        }
        Playback.UiRoot = UiRoot;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiApp {
            constructor(appElementId) {
                this.Parameters = new Map();
                this.OnDispose = null;
                this.OnStart = null;
                this._AppElementId = null;
                this._AppElement = null;
                this._Html5PlaybackRoot = null;
                this._ProfileId = null;
                this._StyleElement = null;
                this._StyleSheet = null;
                this._TenantId = null;
                this._CallbackThis = null;
                this._DownloadTextCallback = null;
                this._ServerListeners = [];
                this._ServerRequest = null;
                UiApp._Instance = this;
                this._AppElementId = appElementId;
                this.ParseParameters();
            }
            Dispose() {
                this.DisposeServerRequest();
                if (Playback.Is.Something(this.OnDispose)) {
                    try {
                        this.OnDispose();
                    }
                    catch (dex) {
                        Playback.Log.Instance.LogError(dex);
                    }
                }
                if (Playback.Is.Something(this._AppElement)) {
                    try {
                        this._AppElement.Dispose();
                    }
                    catch (dex) {
                        Playback.Log.Instance.LogError(dex);
                    }
                }
                if (Playback.Is.Something(this._StyleSheet)) {
                    this._StyleSheet = null;
                }
                if (Playback.Is.Something(this._StyleElement)) {
                    try {
                        document.head.removeChild(this._StyleElement);
                    }
                    catch (dex) {
                        Playback.Log.Instance.LogError(dex);
                    }
                }
            }
            get AppElement() { return (this._AppElement); }
            DownloadText(url, callback, callbackThis) {
				url = url.replace("axistvcm2.tcnj.edu", "159.91.13.63");
                if (Playback.Is.NoText(url))
                    throw new Error(Playback.ErrorPhrases.IsRequired('url'));
                if (Playback.Is.Nothing(callback))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callback'));
                if (Playback.Is.Nothing(callbackThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callbackThis'));
                if (this.IsWaitingOnServer)
                    throw new Error(Playback.ErrorPhrases.InvalidOperation('current request not finished yet'));
                this._CallbackThis = callbackThis;
                this._DownloadTextCallback = callback;
                this._ServerRequest = new XMLHttpRequest();
                this._ServerListeners = [];
                this._ServerListeners.push(Playback.UiEventListener.FactoryForHttp(this._ServerRequest, Playback.EventNames.Load, this.HandleDownloadTextResponse, this));
                this._ServerListeners.push(Playback.UiEventListener.FactoryForHttp(this._ServerRequest, Playback.EventNames.Error, this.HandleDownloadTextResponse, this));
                this._ServerListeners.push(Playback.UiEventListener.FactoryForHttp(this._ServerRequest, Playback.EventNames.Timeout, this.HandleDownloadTextResponse, this));
                this._ServerRequest.open(Playback.HttpMethods.Get, Playback.Next.UrlWithCacheBlocking(url));
                this._ServerRequest.send();
            }
            get Html5PlaybackRoot() { return (this._Html5PlaybackRoot); }
            static get Instance() { return (UiApp._Instance); }
            get IsWaitingOnServer() { return (this._ServerRequest !== null); }
            get ProfileId() { return (this._ProfileId); }
            get ProfileUrl() {
                let url = null;
                if (Playback.Is.SomeText(this.TenantId) && Playback.Is.SomeText(this.ProfileId)) {
                    url = this.Html5PlaybackRoot +
                        Playback.FileParts.Profiles + '/' +
                        this.TenantId + '/' +
                        this.ProfileId + Playback.FileParts.JsonExtension;
                }
                return (url);
            }
            Start() {
                try {
                    if (Playback.Is.Something(this._AppElement))
                        throw (Playback.ErrorPhrases.CallOnlyOnce('Start'));
                    this._AppElement = new Playback.UiRoot(this._AppElementId);
                    if (!Playback.UiLocalizer.Instance.IsInitialized) {
                        Playback.UiLocalizer.Instance.Initialize(this.HandleLocalizedTextInitialized, this);
                    }
                    else {
                        if (Playback.Is.Something(this.OnStart))
                            this.OnStart(Playback.UiLocalizer.Instance.IsInitializedSuccessfully);
                    }
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            get TenantId() { return (this._TenantId); }
            DefineAppStylesheet(rules) {
                if (Playback.Is.Nothing(rules))
                    throw Error(Playback.ErrorPhrases.IsRequired('rules'));
                if (Playback.Is.Nothing(this._StyleElement) && Playback.Is.Nothing(this._StyleSheet)) {
                    this._StyleElement = document.createElement(Playback.TagNames.Style);
                    document.head.appendChild(this._StyleElement);
                    this._StyleSheet = this._StyleElement.sheet;
                }
                let currentTotal = this._StyleSheet.cssRules.length;
                for (let index = currentTotal - 1; index >= 0; index--)
                    this._StyleSheet.deleteRule(index);
                for (const rule of rules)
                    this._StyleSheet.insertRule(rule, this._StyleSheet.cssRules.length);
            }
            DisposeServerRequest() {
                if (Playback.Is.Something(this._ServerRequest)) {
                    for (const listener of this._ServerListeners)
                        listener.Dispose();
                    this._ServerRequest = null;
                    this._ServerListeners = [];
                }
                this._CallbackThis = null;
                this._DownloadTextCallback = null;
            }
            HandleDownloadTextResponse() {
                try {
                    if (Playback.Is.Nothing(this._ServerRequest))
                        throw new Error(Playback.ErrorPhrases.IsRequired('_ServerRequest'));
                    if (Playback.Is.Nothing(this._CallbackThis))
                        throw new Error(Playback.ErrorPhrases.IsRequired('_CallbackThis'));
                    if (Playback.Is.Nothing(this._DownloadTextCallback))
                        throw new Error(Playback.ErrorPhrases.IsRequired('_DownloadTextCallback'));
                    let callbackThis = this._CallbackThis;
                    let callback = this._DownloadTextCallback;
                    let request = this._ServerRequest;
                    this.DisposeServerRequest();
                    let text = null;
                    if (request.status === Playback.HttpStatuses.Success)
                        text = request.responseText;
                    callback.call(callbackThis, text);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleLocalizedTextInitialized(success) {
                try {
                    if (Playback.Is.Something(this.OnStart))
                        this.OnStart(success);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            ParseParameters() {
                let url = new URL(document.location.href);
                url.searchParams.forEach((value, key) => {
                    this.Parameters.set(key.toLowerCase(), value);
                });
                let useAppUrl = true;
                do {
                    if (!this.Parameters.has(Playback.UrlFlagNames.DebugRoot))
                        break;
                    let debugUrl = this.Parameters.get(Playback.UrlFlagNames.DebugRoot);
                    if (Playback.Is.NoText(debugUrl))
                        break;
                    debugUrl = decodeURIComponent(debugUrl);
                    if (Playback.Is.NoText(debugUrl))
                        break;
                    if (debugUrl.charAt(debugUrl.length - 1) !== '/')
                        debugUrl += '/';
                    this._Html5PlaybackRoot = debugUrl;
                    useAppUrl = false;
                } while (false);
                if (useAppUrl) {
                    let appUrl = url.protocol + '//' + url.host + url.pathname;
                    this._Html5PlaybackRoot = appUrl.substring(0, appUrl.lastIndexOf('/') + 1);
                }
                if (this.Parameters.has(Playback.UrlFlagNames.LogLevel)) {
                    switch (this.Parameters.get(Playback.UrlFlagNames.LogLevel)) {
                        case Playback.LogLevel.ElementAlloc: {
                            Playback.Log.Instance.IncludeElementAllocations = true;
                            break;
                        }
                        case Playback.LogLevel.EventAlloc: {
                            Playback.Log.Instance.IncludeEventAllocations = true;
                            break;
                        }
                        case Playback.LogLevel.Info: {
                            Playback.Log.Instance.IncludeInfo = true;
                        }
                        case Playback.LogLevel.Stack: {
                            Playback.Log.Instance.IncludeStack = true;
                        }
                        case Playback.LogLevel.Errors: {
                            Playback.Log.Instance.IncludeErrors = true;
                            break;
                        }
                    }
                }
                if (this.Parameters.has(Playback.UrlFlagNames.Profile)) {
                    this._ProfileId = this.Parameters.get(Playback.UrlFlagNames.Profile);
                }
                if (this.Parameters.has(Playback.UrlFlagNames.Tenant)) {
                    this._TenantId = this.Parameters.get(Playback.UrlFlagNames.Tenant);
                }
            }
        }
        UiApp._Instance = null;
        Playback.UiApp = UiApp;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    let PlaybackTextNames;
    (function (PlaybackTextNames) {
        PlaybackTextNames["MessageVuCannotLoadProfile"] = "MessageVuCannotLoadProfile";
        PlaybackTextNames["MessageVuErrorTitle"] = "MessageVuErrorTitle";
        PlaybackTextNames["MessageVuInvalidProfile"] = "MessageVuInvalidProfile";
        PlaybackTextNames["MessageVuNoTenantOrProfileId"] = "MessageVuNoTenantOrProfileId";
        PlaybackTextNames["MessageVuTitle"] = "MessageVuTitle";
        PlaybackTextNames["MessageVuUnexpectedError"] = "MessageVuUnexpectedError";
        PlaybackTextNames["NoMessages"] = "NoMessages";
        PlaybackTextNames["NoMoreMessages"] = "NoMoreMessages";
        PlaybackTextNames["UnexpectedNoNextMessage"] = "UnexpectedNoNextMessage";
    })(PlaybackTextNames = Html5.PlaybackTextNames || (Html5.PlaybackTextNames = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiLocalizer {
            constructor() {
                this._Callback = null;
                this._CallbackThis = null;
                this._IsInitialized = false;
                this._IsInitializedSuccessfully = false;
                this._IsLanguageSpecific = false;
                this._LocalizedText = null;
            }
            static get Instance() {
                if (UiLocalizer._Instance === null) {
                    UiLocalizer._Instance = new UiLocalizer();
                }
                return (UiLocalizer._Instance);
            }
            Initialize(callback, callbackThis) {
                if (this._IsInitialized)
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('Initialize'));
                if (Playback.Is.Nothing(callback))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callback'));
                if (Playback.Is.Nothing(callbackThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callbackThis'));
                this._Callback = callback;
                this._CallbackThis = callbackThis;
                Playback.Log.Instance.LogInfo('UiLocalizer trying language-specific JSON');
                Playback.UiApp.Instance.DownloadText(this.FormJsonUrl(true), this.HandleDownloadJsonCompleted, this);
            }
            get IsInitialized() { return (this._IsInitialized); }
            get IsInitializedSuccessfully() { return (this._IsInitializedSuccessfully); }
            get Text() {
                if (!this._IsInitialized)
                    throw new Error(Playback.ErrorPhrases.CallFirst('Initialize'));
                return (this._LocalizedText);
            }
            FormJsonUrl(withLanguage) {
                this._IsLanguageSpecific = withLanguage;
                let language = withLanguage ? navigator.language.substr(0, 2) : '';
                if (Playback.Is.SomeText(language))
                    language = '.' + language;
                return (Playback.UiApp.Instance.Html5PlaybackRoot + Playback.FileParts.PlaybackText + language + Playback.FileParts.JsonExtension);
            }
            HandleDownloadJsonCompleted(text) {
                if (Playback.Is.SomeText(text)) {
                    this._LocalizedText = JSON.parse(text);
                    this._IsInitialized = true;
                    this._IsInitializedSuccessfully = true;
                    Playback.Log.Instance.LogInfo('Text retrieved');
                    if (Playback.Is.Something(this._CallbackThis) && Playback.Is.Something(this._Callback)) {
                        this._Callback.call(this._CallbackThis, this._IsInitializedSuccessfully);
                    }
                }
                else {
                    if (this._IsLanguageSpecific) {
                        Playback.Log.Instance.LogInfo('UiLocalizer trying language-agnostic JSON');
                        Playback.UiApp.Instance.DownloadText(this.FormJsonUrl(false), this.HandleDownloadJsonCompleted, this);
                    }
                    else {
                        this._IsInitialized = true;
                        this._IsInitializedSuccessfully = false;
                        Playback.Log.Instance.LogInfo('Text could not be retrieved');
                        if (Playback.Is.Something(this._CallbackThis) && Playback.Is.Something(this._Callback)) {
                            this._Callback.call(this._CallbackThis, this._IsInitializedSuccessfully);
                        }
                    }
                }
            }
        }
        UiLocalizer._Instance = null;
        Playback.UiLocalizer = UiLocalizer;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiIconManager {
            constructor() {
                this._Callback = null;
                this._CallbackThis = null;
                this._DataUrlHorzPlay = null;
                this._DataUrlHorzPause = null;
                this._DataUrlHorzStop = null;
                this._DataUrlHorzPrevious = null;
                this._DataUrlHorzNext = null;
                this._DataUrlVertPlay = null;
                this._DataUrlVertPause = null;
                this._DataUrlVertStop = null;
                this._DataUrlVertPrevious = null;
                this._DataUrlVertNext = null;
                this._IsInitialized = false;
                this._IsInitializedSuccessfully = false;
                this._PrimaryColor = null;
            }
            static get Instance() {
                if (UiIconManager._Instance === null) {
                    UiIconManager._Instance = new UiIconManager();
                }
                return (UiIconManager._Instance);
            }
            get DataUrlHorzPlay() { return (this._DataUrlHorzPlay); }
            get DataUrlHorzPause() { return (this._DataUrlHorzPause); }
            get DataUrlHorzStop() { return (this._DataUrlHorzStop); }
            get DataUrlHorzPrevious() { return (this._DataUrlHorzPrevious); }
            get DataUrlHorzNext() { return (this._DataUrlHorzNext); }
            get DataUrlVertPlay() { return (this._DataUrlVertPlay); }
            get DataUrlVertPause() { return (this._DataUrlVertPause); }
            get DataUrlVertStop() { return (this._DataUrlVertStop); }
            get DataUrlVertPrevious() { return (this._DataUrlVertPrevious); }
            get DataUrlVertNext() { return (this._DataUrlVertNext); }
            Initialize(primaryColor, callback, callbackThis) {
                if (this._IsInitialized)
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('Initialize'));
                if (Playback.Is.Nothing(primaryColor))
                    throw new Error(Playback.ErrorPhrases.IsRequired('primaryColor'));
                if (Playback.Is.Nothing(callback))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callback'));
                if (Playback.Is.Nothing(callbackThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callbackThis'));
                this._Callback = callback;
                this._CallbackThis = callbackThis;
                this._PrimaryColor = primaryColor.CssColor;
                Playback.Log.Instance.LogInfo('UiIconManager trying ' + Playback.FileParts.IconLibrary);
                let libraryUrl = Playback.UiApp.Instance.Html5PlaybackRoot + Playback.FileParts.IconLibrary;
                Playback.UiApp.Instance.DownloadText(libraryUrl, this.HandleDownloadIconLibraryCompleted, this);
            }
            get IsInitialized() { return (this._IsInitialized); }
            get IsInitializedSuccessfully() { return (this._IsInitializedSuccessfully); }
            ExpandMacro(original, macro, expansion) {
                let expanded = original;
                do {
                    if (Playback.Is.NoText(original))
                        break;
                    if (Playback.Is.NoText(macro))
                        break;
                    if (Playback.Is.NoText(expansion))
                        break;
                    let index = expanded.indexOf(macro);
                    while (index > -1) {
                        expanded = expanded.replace(macro, expansion);
                        index = expanded.indexOf(macro);
                    }
                } while (false);
                return (expanded);
            }
            HandleDownloadIconLibraryCompleted(text) {
                this._IsInitialized = true;
                if (Playback.Is.SomeText(text)) {
                    let succeeded = false;
                    do {
                        Playback.Log.Instance.LogInfo('Icon text retrieved');
                        let expanded = this.ExpandMacro(text, Playback.TextValues.SvgPrimaryFillColorMacro, this._PrimaryColor);
                        let rawItems = expanded.split(Playback.TextValues.SvgLibraryDelim);
                        let items = [];
                        for (const rawItem of rawItems)
                            items.push(rawItem.trim());
                        if (items.length !== 10) {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.UnexpectedCount('icons', 10, items.length)));
                            break;
                        }
                        if (Playback.Is.SomeText(items[0]))
                            this._DataUrlHorzPlay = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[0]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlHorzPlay')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[1]))
                            this._DataUrlVertPlay = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[1]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlVertPlay')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[2]))
                            this._DataUrlHorzPause = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[2]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlHorzPause')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[3]))
                            this._DataUrlVertPause = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[3]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlVertPause')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[4]))
                            this._DataUrlHorzStop = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[4]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlHorzStop')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[5]))
                            this._DataUrlVertStop = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[5]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlVertStop')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[6]))
                            this._DataUrlHorzPrevious = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[6]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlHorzPrevious')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[7]))
                            this._DataUrlVertPrevious = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[7]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlVertPrevious')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[8]))
                            this._DataUrlHorzNext = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[8]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlHorzNext')));
                            break;
                        }
                        if (Playback.Is.SomeText(items[9]))
                            this._DataUrlVertNext = Playback.FileParts.SvgDataUrlFragment + encodeURIComponent(items[9]);
                        else {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('DataUrlVertNext')));
                            break;
                        }
                        succeeded = true;
                    } while (false);
                    this._IsInitializedSuccessfully = succeeded;
                    if (Playback.Is.Something(this._CallbackThis) && Playback.Is.Something(this._Callback)) {
                        this._Callback.call(this._CallbackThis, succeeded);
                    }
                }
                else {
                    Playback.Log.Instance.LogInfo('Icons could not be retrieved');
                    this._IsInitializedSuccessfully = false;
                    if (Playback.Is.Something(this._CallbackThis) && Playback.Is.Something(this._Callback)) {
                        this._Callback.call(this._CallbackThis, false);
                    }
                }
            }
        }
        UiIconManager._Instance = null;
        Playback.UiIconManager = UiIconManager;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiBlock extends Playback.UiElement {
            constructor(idBase) {
                super();
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                this.Instantiate(Playback.TagNames.Div, this.GenerateId(idBase), Playback.UiBoxKind.Block, true);
            }
        }
        Playback.UiBlock = UiBlock;
        class UiCenteringBlock extends UiBlock {
            constructor(idBase) {
                super(idBase);
                this.Settings.BoxKind = Playback.UiBoxKind.Flex;
                this.Settings.FlexChildHorzLayout = Playback.UiLayoutStrategy.Middle;
                this.Settings.FlexChildVertLayout = Playback.UiLayoutStrategy.Middle;
            }
        }
        Playback.UiCenteringBlock = UiCenteringBlock;
        class UiImageBlock extends Playback.UiElement {
            constructor(idBase) {
                super();
                this._ClickListener = null;
                this._LoadErrorListener = null;
                this._LoadListener = null;
                this._MoreInformationUrl = null;
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                this.OnDispose = this.HandleDispose;
                this.Instantiate(Playback.TagNames.Image, this.GenerateId(idBase), Playback.UiBoxKind.Block, true);
            }
            HandleDispose() {
                this._ClickListener = null;
                this._LoadErrorListener = null;
                this._LoadListener = null;
            }
            get ImageUrl() { return (this.DomElement.src); }
            set ImageUrl(url) { this.DomElement.src = url.replace("axistvcm2.tcnj.edu", "159.91.13.63"); }
            EnableClickForMoreInformation(moreInformationUrl) {
                if (Playback.Is.NoText(moreInformationUrl))
                    throw new Error(Playback.ErrorPhrases.IsRequired('moreInformationUrl'));
                if (Playback.Is.Something(this._ClickListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('EnableClickForMoreInformation'));
                this._MoreInformationUrl = moreInformationUrl;
                this.NotifyOnClick(this.HandleShowMoreInformation, this);
            }
            NotifyOnClick(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._ClickListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnClick'));
                this._ClickListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Click, handler, handlersThis);
                this.DomEvents.push(this._ClickListener);
            }
            NotifyOnLoadError(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._LoadErrorListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnLoadError'));
                this._LoadErrorListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Error, handler, handlersThis);
                this.DomEvents.push(this._LoadErrorListener);
            }
            NotifyOnLoad(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._LoadListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnLoad'));
                this._LoadListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Load, handler, handlersThis);
                this.DomEvents.push(this._LoadListener);
            }
            HandleShowMoreInformation() {
                try {
                    window.open(this._MoreInformationUrl, Playback.WindowNames.Blank);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
        }
        Playback.UiImageBlock = UiImageBlock;
        class UiVideoBlock extends Playback.UiElement {
            constructor(idBase) {
                super();
                this._AbortListener = null;
                this._CanPlayListener = null;
                this._ClickListener = null;
                this._EndedListener = null;
                this._ErrorListener = null;
                this._MoreInformationUrl = null;
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                this.OnDispose = this.HandleDispose;
                this.Instantiate(Playback.TagNames.Video, this.GenerateId(idBase), Playback.UiBoxKind.Block, true);
                let mediaElement = this.DomElement;
                mediaElement.autoplay = false;
                mediaElement.controls = false;
                mediaElement.loop = false;
            }
            HandleDispose() {
                this._AbortListener = null;
                this._CanPlayListener = null;
                this._ClickListener = null;
                this._EndedListener = null;
                this._ErrorListener = null;
            }
            Play() {
                if (Playback.Is.Something(this.DomElement)) {
                    this.DomElement.play();
                }
            }
            Pause() {
                if (Playback.Is.Something(this.DomElement)) {
                    this.DomElement.pause();
                }
            }
            get VideoUrl() { return (this.DomElement.src); }
            set VideoUrl(url) { this.DomElement.src = url; }
            EnableClickForMoreInformation(moreInformationUrl) {
                if (Playback.Is.NoText(moreInformationUrl))
                    throw new Error(Playback.ErrorPhrases.IsRequired('moreInformationUrl'));
                if (Playback.Is.Something(this._ClickListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('EnableClickForMoreInformation'));
                this._MoreInformationUrl = moreInformationUrl;
                this.NotifyOnClick(this.HandleShowMoreInformation, this);
            }
            NotifyOnAbort(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._AbortListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnAbort'));
                this._AbortListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Abort, handler, handlersThis);
                this.DomEvents.push(this._AbortListener);
            }
            NotifyOnCanPlay(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._CanPlayListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnCanPlay'));
                this._CanPlayListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.CanPlay, handler, handlersThis);
                this.DomEvents.push(this._CanPlayListener);
            }
            NotifyOnClick(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._ClickListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnClick'));
                this._ClickListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Click, handler, handlersThis);
                this.DomEvents.push(this._ClickListener);
            }
            NotifyOnEnded(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._EndedListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnEnded'));
                this._EndedListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Ended, handler, handlersThis);
                this.DomEvents.push(this._EndedListener);
            }
            NotifyOnError(handler, handlersThis) {
                if (Playback.Is.Nothing(handler))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handler'));
                if (Playback.Is.Nothing(handlersThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('handlersThis'));
                if (Playback.Is.Something(this._ErrorListener))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('NotifyOnError'));
                this._ErrorListener = Playback.UiEventListener.FactoryForDom(this.DomElement, Playback.EventNames.Error, handler, handlersThis);
                this.DomEvents.push(this._ErrorListener);
            }
            HandleShowMoreInformation() {
                try {
                    window.open(this._MoreInformationUrl, Playback.WindowNames.Blank);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
        }
        Playback.UiVideoBlock = UiVideoBlock;
        class UiWebPageBlock extends Playback.UiElement {
            constructor(idBase) {
                super();
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                this.OnDispose = this.HandleDispose;
                this.Instantiate(Playback.TagNames.Iframe, this.GenerateId(idBase), Playback.UiBoxKind.Block, true);
            }
            HandleDispose() {
            }
            get WebPageUrl() { return (this.DomElement.src); }
            set WebPageUrl(url) { this.DomElement.src = url; }
        }
        Playback.UiWebPageBlock = UiWebPageBlock;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiHeading1 extends Playback.UiElement {
            constructor(idBase) {
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                super();
                this.Instantiate(Playback.TagNames.H1, this.GenerateId(idBase), Playback.UiBoxKind.Inline, false);
            }
            get Text() { return (this.DomElement.innerText); }
            set Text(value) { this.DomElement.innerText = value !== null && value !== void 0 ? value : ''; }
        }
        Playback.UiHeading1 = UiHeading1;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class UiButtonBarBlock extends Playback.UiElement {
            constructor(idBase, isVertical, layoutStrategy, extraPadding) {
                super();
                this._ExtraPadding = 0;
                this._IsVertical = false;
                this._LayoutStrategy = Playback.UiLayoutStrategy.Far;
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                if (Playback.Is.Nothing(isVertical))
                    throw new Error(Playback.ErrorPhrases.IsRequired('isVertical'));
                if (Playback.Is.Nothing(layoutStrategy))
                    throw new Error(Playback.ErrorPhrases.IsRequired('layoutStrategy'));
                this._IsVertical = isVertical;
                this._LayoutStrategy = layoutStrategy;
                if (Playback.Is.Something(extraPadding))
                    this._ExtraPadding = extraPadding;
                this.OnValidate = this.HandleValidate;
                this.Instantiate(Playback.TagNames.Div, idBase, Playback.UiBoxKind.Block, true);
            }
            get ExtraPadding() { return (this._ExtraPadding); }
            get IsVertical() { return (this._IsVertical); }
            get LayoutStrategy() { return (this._LayoutStrategy); }
            HandleValidate() {
                try {
                    do {
                        if (Playback.Is.Nothing(this.Settings.Width))
                            break;
                        if (Playback.Is.Nothing(this.Settings.Height))
                            break;
                        if (Playback.Is.Nothing(this.Children))
                            break;
                        if (this.Children.length === 0)
                            break;
                        if (Playback.Is.Nothing(this._ExtraPadding))
                            this._ExtraPadding = 0;
                        if (this._ExtraPadding < 0)
                            this._ExtraPadding = 0;
                        let totalVisibleWidth = 0;
                        let totalVisibleHeight = 0;
                        let totalVisible = 0;
                        for (const child of this.Children) {
                            if (Playback.Is.Nothing(child.Settings.Width) || child.Settings.Width < 1 ||
                                Playback.Is.Nothing(child.Settings.Height) || child.Settings.Height < 1) {
                                throw new Error(Playback.ErrorPhrases.InvalidOperation('children must have Width and Height to be placed'));
                            }
                            if (!child.Settings.IsHidden) {
                                totalVisible++;
                                totalVisibleWidth += child.Settings.Width;
                                totalVisibleHeight += child.Settings.Height;
                            }
                        }
                        if (this._ExtraPadding > 0) {
                            totalVisibleWidth += (this._ExtraPadding * (totalVisible + 1));
                            totalVisibleHeight += (this._ExtraPadding * (totalVisible + 1));
                        }
                        if (this._IsVertical) {
                            let currentY = 0;
                            switch (this._LayoutStrategy) {
                                case Playback.UiLayoutStrategy.Far:
                                    {
                                        currentY = this.Settings.Height - totalVisibleHeight;
                                        break;
                                    }
                                case Playback.UiLayoutStrategy.Middle:
                                    {
                                        currentY = Math.floor((this.Settings.Height - totalVisibleHeight) / 2);
                                        break;
                                    }
                                case Playback.UiLayoutStrategy.Near:
                                    {
                                        break;
                                    }
                            }
                            for (const child of this.Children) {
                                if (!child.Settings.IsHidden) {
                                    currentY += this._ExtraPadding;
                                    child.Settings.Y = currentY;
                                    currentY += child.Settings.Height;
                                    child.Settings.X = Math.floor((this.Settings.Width - child.Settings.Width) / 2);
                                }
                            }
                        }
                        else {
                            let currentX = 0;
                            switch (this._LayoutStrategy) {
                                case Playback.UiLayoutStrategy.Far:
                                    {
                                        currentX = this.Settings.Width - totalVisibleWidth;
                                        break;
                                    }
                                case Playback.UiLayoutStrategy.Middle:
                                    {
                                        currentX = Math.floor((this.Settings.Width - totalVisibleWidth) / 2);
                                        break;
                                    }
                                case Playback.UiLayoutStrategy.Near:
                                    {
                                        break;
                                    }
                            }
                            for (const child of this.Children) {
                                if (!child.Settings.IsHidden) {
                                    currentX += this._ExtraPadding;
                                    child.Settings.X = currentX;
                                    currentX += child.Settings.Width;
                                    child.Settings.Y = Math.floor((this.Settings.Height - child.Settings.Height) / 2);
                                }
                            }
                        }
                    } while (false);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
        }
        Playback.UiButtonBarBlock = UiButtonBarBlock;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class Transitioner {
            constructor(viewId, callback, callbacksThis) {
                this._AnimationEnd = null;
                this._Callback = null;
                this._CallbacksThis = null;
                this._CutCompletionId = -1;
                this._OldContent = null;
                this._NewContent = null;
                this._ViewId = null;
                this._SelectorOnStage = null;
                this._SelectorOffStage = null;
                this._SelectorFadeIn = null;
                this._SelectorFadeOut = null;
                this._SelectorFlyInDown = null;
                this._SelectorFlyInDownLeft = null;
                this._SelectorFlyInDownRight = null;
                this._SelectorFlyInLeft = null;
                this._SelectorFlyInRight = null;
                this._SelectorFlyInUp = null;
                this._SelectorFlyInUpLeft = null;
                this._SelectorFlyInUpRight = null;
                this._SelectorFlyOutDown = null;
                this._SelectorFlyOutDownLeft = null;
                this._SelectorFlyOutDownRight = null;
                this._SelectorFlyOutLeft = null;
                this._SelectorFlyOutRight = null;
                this._SelectorFlyOutUp = null;
                this._SelectorFlyOutUpLeft = null;
                this._SelectorFlyOutUpRight = null;
                if (Playback.Is.NoText(viewId))
                    throw new Error(Playback.ErrorPhrases.IsRequired('viewId'));
                if (Playback.Is.Nothing(callback))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callback'));
                if (Playback.Is.Nothing(callbacksThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('callbacksThis'));
                this._ViewId = viewId.trim();
                this._Callback = callback;
                this._CallbacksThis = callbacksThis;
                this._SelectorFadeIn = this._ViewId + Playback.TransitionSelectorSuffixes.FadeIn;
                this._SelectorFadeOut = this._ViewId + Playback.TransitionSelectorSuffixes.FadeOut;
                this._SelectorFlyInDown = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInDown;
                this._SelectorFlyInDownLeft = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInDownLeft;
                this._SelectorFlyInDownRight = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInDownRight;
                this._SelectorFlyInLeft = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInLeft;
                this._SelectorFlyInRight = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInRight;
                this._SelectorFlyInUp = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInUp;
                this._SelectorFlyInUpLeft = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInUpLeft;
                this._SelectorFlyInUpRight = this._ViewId + Playback.TransitionSelectorSuffixes.FlyInUpRight;
                this._SelectorFlyOutDown = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutDown;
                this._SelectorFlyOutDownLeft = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutDownLeft;
                this._SelectorFlyOutDownRight = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutDownRight;
                this._SelectorFlyOutLeft = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutLeft;
                this._SelectorFlyOutRight = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutRight;
                this._SelectorFlyOutUp = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutUp;
                this._SelectorFlyOutUpLeft = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutUpLeft;
                this._SelectorFlyOutUpRight = this._ViewId + Playback.TransitionSelectorSuffixes.FlyOutUpRight;
                this._SelectorOffStage = this._ViewId + Playback.TransitionSelectorSuffixes.OffStage;
                this._SelectorOnStage = this._ViewId + Playback.TransitionSelectorSuffixes.OnStage;
            }
            Dispose() {
                if (this._CutCompletionId > -1) {
                    window.clearTimeout(this._CutCompletionId);
                    this._CutCompletionId = -1;
                }
                this._OldContent = null;
                this._NewContent = null;
                this._Callback = null;
                this._CallbacksThis = null;
            }
            static NewCutTransition() {
                let transition = new Playback.Html5Transition();
                transition.Kind = Playback.Html5TransitionKind.Cut;
                return (transition);
            }
            static NewFadeTransition() {
                let transition = new Playback.Html5Transition();
                transition.Kind = Playback.Html5TransitionKind.Fade;
                return (transition);
            }
            static NewFlyTransition(direction) {
                if (Playback.Is.Nothing(direction))
                    throw new Error(Playback.ErrorPhrases.IsRequired('direction'));
                let transition = new Playback.Html5Transition();
                transition.Kind = Playback.Html5TransitionKind.Fly;
                transition.Direction = direction;
                return (transition);
            }
            static NewPushTransition(direction) {
                if (Playback.Is.Nothing(direction))
                    throw new Error(Playback.ErrorPhrases.IsRequired('direction'));
                let transition = new Playback.Html5Transition();
                transition.Kind = Playback.Html5TransitionKind.Push;
                transition.Direction = direction;
                return (transition);
            }
            GenerateCssRules(viewWidth, viewHeight) {
                if (Playback.Is.Nothing(viewWidth))
                    throw new Error(Playback.ErrorPhrases.IsRequired('viewWidth'));
                if (Playback.Is.Nothing(viewHeight))
                    throw new Error(Playback.ErrorPhrases.IsRequired('viewHeight'));
                if (viewWidth < 1)
                    throw new Error(Playback.ErrorPhrases.InvalidOperation('viewWidth < 1'));
                if (viewHeight < 1)
                    throw new Error(Playback.ErrorPhrases.InvalidOperation('viewHeight < 1'));
                let rules = [];
                rules.push(`.${this._SelectorOnStage} { position: absolute; top: 0px; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; }`);
                rules.push(`.${this._SelectorOffStage} { position: absolute; top: 0px; left: ${viewWidth}px; width: ${viewWidth}px; height: ${viewHeight}px; }`);
                rules.push(`@keyframes ${this._ViewId}-fade-in-frames { from { opacity: 0; } to { opacity: 1; } }`);
                rules.push(`@keyframes ${this._ViewId}-fade-out-frames { from { opacity: 1; } to { opacity: 1; } }`);
                rules.push(`.${this._SelectorFadeIn} { position: absolute; top: 0px; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-fade-in-frames 2s; }`);
                rules.push(`.${this._SelectorFadeOut} { position: absolute; top: 0px; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-fade-out-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-down-frames { from { top: -${viewHeight}px; } to { top: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-down-frames { from { top: 0px; } to { top: ${viewHeight}px; } }`);
                rules.push(`.${this._SelectorFlyInDown} { position: absolute; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-down-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutDown} { position: absolute; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-down-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-downleft-frames { from { left: ${viewWidth}px; top: -${viewHeight}px; } to { left: 0px; top: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-downleft-frames { from { left: 0px; top: 0px; } to { left: -${viewWidth}px; top: ${viewHeight}px; } }`);
                rules.push(`.${this._SelectorFlyInDownLeft} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-downleft-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutDownLeft} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-downleft-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-downright-frames { from { left: -${viewWidth}px; top: -${viewHeight}px; } to { left: 0px; top: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-downright-frames { from { left: 0px; top: 0px; } to { left: ${viewWidth}px; top: ${viewHeight}px; } }`);
                rules.push(`.${this._SelectorFlyInDownRight} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-downright-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutDownRight} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-downright-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-left-frames { from { left: ${viewWidth}px; } to { left: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-left-frames { from { left: 0px; } to { left: -${viewWidth}px; } }`);
                rules.push(`.${this._SelectorFlyInLeft} { position: absolute; top: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-left-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutLeft} { position: absolute; top: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-left-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-right-frames { from { left: -${viewWidth}px; } to { left: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-right-frames { from { left: 0px; } to { left: ${viewWidth}px; } }`);
                rules.push(`.${this._SelectorFlyInRight} { position: absolute; top: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-right-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutRight} { position: absolute; top: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-right-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-up-frames { from { top: ${viewHeight}px; } to { top: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-up-frames { from { top: 0px; } to { top: -${viewHeight}px; } }`);
                rules.push(`.${this._SelectorFlyInUp} { position: absolute; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-up-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutUp} { position: absolute; left: 0px; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-up-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-upleft-frames { from { left: ${viewWidth}px; top: ${viewHeight}px; } to { left: 0px; top: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-upleft-frames { from { left: 0px; top: 0px; } to { left: -${viewWidth}px; top: -${viewHeight}px; } }`);
                rules.push(`.${this._SelectorFlyInUpLeft} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-upleft-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutUpLeft} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-upleft-frames 2s; }`);
                rules.push(`@keyframes ${this._ViewId}-flyin-upright-frames { from { left: -${viewWidth}px; top: ${viewHeight}px; } to { left: 0px; top: 0px; } }`);
                rules.push(`@keyframes ${this._ViewId}-flyout-upright-frames { from { left: 0px; top: 0px; } to { left: ${viewWidth}px; top: -${viewHeight}px; } }`);
                rules.push(`.${this._SelectorFlyInUpRight} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyin-upright-frames 2s; }`);
                rules.push(`.${this._SelectorFlyOutUpRight} { position: absolute; width: ${viewWidth}px; height: ${viewHeight}px; animation: ${this._ViewId}-flyout-upright-frames 2s; }`);
                for (const rule of rules)
                    Playback.Log.Instance.LogValueInfo('CSS rule', rule);
                return (rules);
            }
            get OffStageSelector() { return (this._SelectorOffStage); }
            get OnStageSelector() { return (this._SelectorOnStage); }
            StartTransition(oldContent, newContent, transition) {
                if (Playback.Is.Nothing(oldContent))
                    throw new Error(Playback.ErrorPhrases.IsRequired('oldContent'));
                if (Playback.Is.Nothing(newContent))
                    throw new Error(Playback.ErrorPhrases.IsRequired('newContent'));
                if (Playback.Is.Nothing(transition))
                    throw new Error(Playback.ErrorPhrases.IsRequired('transition'));
                this._OldContent = oldContent;
                this._NewContent = newContent;
                let xtion = new Playback.Html5Transition();
                xtion.Direction = transition.Direction;
                xtion.Kind = transition.Kind;
                if (transition.Kind === Playback.Html5TransitionKind.Random) {
                    let randomKind = Math.floor(Math.random() * Playback.TransitionValues.NonRandomTransitionCount);
                    let direction = Math.floor(Math.random() * Playback.TransitionValues.DirectionCount);
                    switch (randomKind) {
                        case 0: {
                            xtion.Kind = Playback.Html5TransitionKind.Fade;
                            break;
                        }
                        case 1:
                        case 2:
                            {
                                if (randomKind === 1)
                                    xtion.Kind = Playback.Html5TransitionKind.Fly;
                                else
                                    xtion.Kind = Playback.Html5TransitionKind.Push;
                                switch (direction) {
                                    case 0: {
                                        xtion.Direction = Playback.Html5TransitionDirection.Down;
                                        break;
                                    }
                                    case 1: {
                                        xtion.Direction = Playback.Html5TransitionDirection.DownLeft;
                                        break;
                                    }
                                    case 2: {
                                        xtion.Direction = Playback.Html5TransitionDirection.DownRight;
                                        break;
                                    }
                                    case 3: {
                                        xtion.Direction = Playback.Html5TransitionDirection.Left;
                                        break;
                                    }
                                    case 4: {
                                        xtion.Direction = Playback.Html5TransitionDirection.Right;
                                        break;
                                    }
                                    case 5: {
                                        xtion.Direction = Playback.Html5TransitionDirection.Up;
                                        break;
                                    }
                                    case 6: {
                                        xtion.Direction = Playback.Html5TransitionDirection.UpLeft;
                                        break;
                                    }
                                    case 7: {
                                        xtion.Direction = Playback.Html5TransitionDirection.UpRight;
                                        break;
                                    }
                                }
                                break;
                            }
                        default: {
                            xtion.Kind = Playback.Html5TransitionKind.Cut;
                            break;
                        }
                    }
                }
                switch (xtion.Kind) {
                    case Playback.Html5TransitionKind.Cut: {
                        this.StartCut();
                        break;
                    }
                    case Playback.Html5TransitionKind.Fade: {
                        this.StartFade();
                        break;
                    }
                    case Playback.Html5TransitionKind.Fly: {
                        this.StartFly(xtion.Direction);
                        break;
                    }
                    case Playback.Html5TransitionKind.Push: {
                        this.StartPush(xtion.Direction);
                        break;
                    }
                }
            }
            StartCut() {
                this._CutCompletionId = window.setTimeout(() => { this.FinishCut(); }, Playback.Intervals.NotificationDelay);
                Playback.Log.Instance.LogAllocTimeout('Cut');
            }
            StartFade() {
                this._AnimationEnd = Playback.UiEventListener.FactoryForDom(this._NewContent.DomElement, Playback.EventNames.AnimationEnd, this.FinishFadeFlyPush, this);
                this._NewContent.DomEvents.push(this._AnimationEnd);
                this._OldContent.Settings.CssClass = this._SelectorFadeOut;
                this._NewContent.Settings.CssClass = this._SelectorFadeIn;
                this._OldContent.Validate();
                this._NewContent.Validate();
            }
            StartFly(direction) {
                this._AnimationEnd = Playback.UiEventListener.FactoryForDom(this._NewContent.DomElement, Playback.EventNames.AnimationEnd, this.FinishFadeFlyPush, this);
                this._NewContent.DomEvents.push(this._AnimationEnd);
                switch (direction) {
                    case Playback.Html5TransitionDirection.Down:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDown;
                            break;
                        }
                    case Playback.Html5TransitionDirection.DownLeft:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDownLeft;
                            break;
                        }
                    case Playback.Html5TransitionDirection.DownRight:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDownRight;
                            break;
                        }
                    case Playback.Html5TransitionDirection.Left:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInLeft;
                            break;
                        }
                    case Playback.Html5TransitionDirection.Right:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInRight;
                            break;
                        }
                    case Playback.Html5TransitionDirection.Up:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInUp;
                            break;
                        }
                    case Playback.Html5TransitionDirection.UpLeft:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInUpLeft;
                            break;
                        }
                    case Playback.Html5TransitionDirection.UpRight:
                        {
                            this._NewContent.Settings.CssClass = this._SelectorFlyInUpRight;
                            break;
                        }
                    default:
                        {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.UnexpectedEnumValue('direction')));
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDown;
                            break;
                        }
                }
                this._NewContent.Validate();
            }
            StartPush(direction) {
                this._AnimationEnd = Playback.UiEventListener.FactoryForDom(this._NewContent.DomElement, Playback.EventNames.AnimationEnd, this.FinishFadeFlyPush, this);
                this._NewContent.DomEvents.push(this._AnimationEnd);
                switch (direction) {
                    case Playback.Html5TransitionDirection.Down:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutDown;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDown;
                            break;
                        }
                    case Playback.Html5TransitionDirection.DownLeft:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutDownLeft;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDownLeft;
                            break;
                        }
                    case Playback.Html5TransitionDirection.DownRight:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutDownRight;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDownRight;
                            break;
                        }
                    case Playback.Html5TransitionDirection.Left:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutLeft;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInLeft;
                            break;
                        }
                    case Playback.Html5TransitionDirection.Right:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutRight;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInRight;
                            break;
                        }
                    case Playback.Html5TransitionDirection.Up:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutUp;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInUp;
                            break;
                        }
                    case Playback.Html5TransitionDirection.UpLeft:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutUpLeft;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInUpLeft;
                            break;
                        }
                    case Playback.Html5TransitionDirection.UpRight:
                        {
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutUpRight;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInUpRight;
                            break;
                        }
                    default:
                        {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.UnexpectedEnumValue('direction')));
                            this._OldContent.Settings.CssClass = this._SelectorFlyOutDown;
                            this._NewContent.Settings.CssClass = this._SelectorFlyInDown;
                            break;
                        }
                }
                this._OldContent.Validate();
                this._NewContent.Validate();
            }
            FinalizeTransition() {
                let success = false;
                if (Playback.Is.Something(this._OldContent) && Playback.Is.Something(this._NewContent)) {
                    try {
                        this._OldContent.Settings.CssClass = this.OffStageSelector;
                        this._NewContent.Settings.CssClass = this.OnStageSelector;
                        this._OldContent.Validate();
                        this._NewContent.Validate();
                        success = true;
                    }
                    catch (error) {
                        Playback.Log.Instance.LogError(error);
                    }
                }
                if (Playback.Is.Something(this._Callback) && Playback.Is.Something(this._CallbacksThis)) {
                    try {
                        this._Callback.call(this._CallbacksThis, success);
                    }
                    catch (error) {
                        Playback.Log.Instance.LogError(error);
                    }
                }
            }
            FinishCut() {
                if (this._CutCompletionId > -1) {
                    window.clearTimeout(this._CutCompletionId);
                    this._CutCompletionId = -1;
                    Playback.Log.Instance.LogFreeTimeout('Cut');
                }
                this.FinalizeTransition();
            }
            FinishFadeFlyPush() {
                if (Playback.Is.Something(this._NewContent) && Playback.Is.Something(this._AnimationEnd)) {
                    this._NewContent.RemoveDomEvent(this._AnimationEnd, true);
                    this._AnimationEnd = null;
                }
                this.FinalizeTransition();
            }
        }
        Playback.Transitioner = Transitioner;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        let MessageKind;
        (function (MessageKind) {
            MessageKind[MessageKind["Buffer"] = 0] = "Buffer";
            MessageKind[MessageKind["Image"] = 1] = "Image";
            MessageKind[MessageKind["Text"] = 2] = "Text";
            MessageKind[MessageKind["Video"] = 3] = "Video";
            MessageKind[MessageKind["WebPage"] = 4] = "WebPage";
        })(MessageKind = Playback.MessageKind || (Playback.MessageKind = {}));
        class MessageItem {
            constructor() {
                this.Kind = MessageKind.Buffer;
                this.Duration = null;
                this.Height = null;
                this.Text = null;
                this.Transition = null;
                this.Url = null;
                this.MoreInformationUrl = null;
                this.UseCacheBlocking = null;
                this.Width = null;
            }
            static BufferFactory(transition) {
                let item = new MessageItem();
                item.Kind = MessageKind.Buffer;
                item.Transition = transition;
                return (item);
            }
            static ImageFactory(url, moreInformationUrl, useCacheBlocking, width, height, duration, transition) {
                if (Playback.Is.NoText(url))
                    throw new Error(Playback.ErrorPhrases.IsRequired('url'));
                if (Playback.Is.Nothing(useCacheBlocking))
                    throw new Error(Playback.ErrorPhrases.IsRequired('useCacheBlocking'));
                let item = new MessageItem();
                item.Kind = MessageKind.Image;
                item.Url = url;
                item.MoreInformationUrl = moreInformationUrl;
                item.UseCacheBlocking = useCacheBlocking;
                item.Width = width;
                item.Height = height;
                item.Duration = duration;
                item.Transition = transition;
                return (item);
            }
            static TextFactory(text, transition) {
                if (Playback.Is.NoText(text))
                    throw new Error(Playback.ErrorPhrases.IsRequired('text'));
                let item = new MessageItem();
                item.Kind = MessageKind.Text;
                item.Text = text;
                item.Transition = transition;
                return (item);
            }
            static TextTestFactory(text, duration, transition) {
                if (Playback.Is.NoText(text))
                    throw new Error(Playback.ErrorPhrases.IsRequired('text'));
                if (Playback.Is.Nothing(duration))
                    throw new Error(Playback.ErrorPhrases.IsRequired('duration'));
                let item = new MessageItem();
                item.Kind = MessageKind.Text;
                item.Text = text;
                item.Duration = duration;
                item.Transition = transition;
                return (item);
            }
            static VideoFactory(url, moreInformationUrl, width, height, transition) {
                if (Playback.Is.NoText(url))
                    throw new Error(Playback.ErrorPhrases.IsRequired('url'));
                let item = new MessageItem();
                item.Kind = MessageKind.Video;
                item.Url = url;
                item.MoreInformationUrl = moreInformationUrl;
                item.Width = width;
                item.Height = height;
                item.Transition = transition;
                return (item);
            }
            static WebPageFactory(url, duration, transition) {
                if (Playback.Is.NoText(url))
                    throw new Error(Playback.ErrorPhrases.IsRequired('url'));
                let item = new MessageItem();
                item.Kind = MessageKind.WebPage;
                item.Url = url;
                item.Duration = duration;
                item.Transition = transition;
                return (item);
            }
        }
        Playback.MessageItem = MessageItem;
        let MessagePlayState;
        (function (MessagePlayState) {
            MessagePlayState[MessagePlayState["IsNotLoaded"] = 0] = "IsNotLoaded";
            MessagePlayState[MessagePlayState["IsLoaded"] = 1] = "IsLoaded";
            MessagePlayState[MessagePlayState["IsUnableToLoad"] = 2] = "IsUnableToLoad";
            MessagePlayState[MessagePlayState["IsPlaying"] = 3] = "IsPlaying";
            MessagePlayState[MessagePlayState["IsUnableToPlay"] = 4] = "IsUnableToPlay";
            MessagePlayState[MessagePlayState["IsFinished"] = 5] = "IsFinished";
        })(MessagePlayState = Playback.MessagePlayState || (Playback.MessagePlayState = {}));
        class MessageView extends Playback.UiElement {
            constructor(idBase, width, height, item, stateCallback, stateCallbacksThis) {
                super();
                this._AsyncId = -1;
                this._DurationTimeoutId = -1;
                this._Item = null;
                this._State = MessagePlayState.IsNotLoaded;
                this._StateCallback = null;
                this._StateCallbacksThis = null;
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                if (Playback.Is.Nothing(width))
                    throw new Error(Playback.ErrorPhrases.IsRequired('width'));
                if (Playback.Is.Nothing(height))
                    throw new Error(Playback.ErrorPhrases.IsRequired('height'));
                if (Playback.Is.Nothing(stateCallback))
                    throw new Error(Playback.ErrorPhrases.IsRequired('stateCallback'));
                if (Playback.Is.Nothing(stateCallbacksThis))
                    throw new Error(Playback.ErrorPhrases.IsRequired('stateCallbacksThis'));
                this.ValidateItem(item);
                this.OnDispose = this.HandleDispose;
                let id = this.GenerateId(idBase);
                this.Instantiate(Playback.TagNames.Div, id, Playback.UiBoxKind.Block, true);
                this.Settings.X = 0;
                this.Settings.Y = 0;
                this.Settings.Width = width;
                this.Settings.Height = height;
                this._Item = item;
                this._StateCallback = stateCallback;
                this._StateCallbacksThis = stateCallbacksThis;
            }
            HandleDispose() {
                if (this._AsyncId > -1) {
                    window.clearTimeout(this._AsyncId);
                    this._AsyncId = -1;
                }
                if (this._DurationTimeoutId > -1) {
                    window.clearTimeout(this._DurationTimeoutId);
                    this._DurationTimeoutId = -1;
                }
                this._Item = null;
            }
            Load() {
                if (this._State !== MessagePlayState.IsNotLoaded)
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('Load'));
                switch (this._Item.Kind) {
                    case MessageKind.Buffer:
                        {
                            this._State = MessagePlayState.IsLoaded;
                            this.NotifyStateChangeAsync();
                            break;
                        }
                    case MessageKind.Text:
                        {
                            let textChild = new Playback.UiHeading1(this.Id + 'text');
                            textChild.Text = this._Item.Text;
                            let textBlock = new Playback.UiCenteringBlock(this.Id + 'textblock');
                            textBlock.Settings.X = 0;
                            textBlock.Settings.Y = 0;
                            textBlock.Settings.Width = this.Settings.Width;
                            textBlock.Settings.Height = this.Settings.Height;
                            textBlock.AddChild(textChild);
                            this.AddChild(textBlock);
                            this.Validate();
                            this._State = MessagePlayState.IsLoaded;
                            this.NotifyStateChangeAsync();
                            break;
                        }
                    case MessageKind.Image:
                        {
                            let imageBlock = new Playback.UiImageBlock(this.Id + 'image');
                            imageBlock.NotifyOnLoad(this.HandleImageLoadSucceeded, this);
                            imageBlock.NotifyOnLoadError(this.HandleImageLoadFailed, this);
                            imageBlock.Settings.X = 0;
                            imageBlock.Settings.Y = 0;
                            imageBlock.Settings.Width = this.Settings.Width;
                            imageBlock.Settings.Height = this.Settings.Height;
                            if (Playback.Is.SomeText(this._Item.MoreInformationUrl))
                                imageBlock.EnableClickForMoreInformation(this._Item.MoreInformationUrl);
                            this.AddChild(imageBlock);
                            this.ResizeView(this.Settings.Width, this.Settings.Height);
                            this.Validate();
                            imageBlock.ImageUrl = (this._Item.UseCacheBlocking === true) ? Playback.Next.UrlWithCacheBlocking(this._Item.Url) : this._Item.Url;
                            break;
                        }
                    case MessageKind.Video:
                        {
                            let videoBlock = new Playback.UiVideoBlock(this.Id + 'video');
                            videoBlock.NotifyOnAbort(this.HandleVideoFailed, this);
                            videoBlock.NotifyOnError(this.HandleVideoFailed, this);
                            videoBlock.NotifyOnCanPlay(this.HandleVideoIsReady, this);
                            videoBlock.NotifyOnEnded(this.HandleVideoEnded, this);
                            videoBlock.Settings.X = 0;
                            videoBlock.Settings.Y = 0;
                            videoBlock.Settings.Width = this.Settings.Width;
                            videoBlock.Settings.Height = this.Settings.Height;
                            if (Playback.Is.SomeText(this._Item.MoreInformationUrl))
                                videoBlock.EnableClickForMoreInformation(this._Item.MoreInformationUrl);
                            this.AddChild(videoBlock);
                            this.ResizeView(this.Settings.Width, this.Settings.Height);
                            this.Validate();
                            videoBlock.VideoUrl = this._Item.Url;
                            break;
                        }
                    case MessageKind.WebPage:
                        {
                            let webBlock = new Playback.UiWebPageBlock(this.Id + 'webpage');
                            webBlock.Settings.X = 0;
                            webBlock.Settings.Y = 0;
                            webBlock.Settings.Width = this.Settings.Width;
                            webBlock.Settings.Height = this.Settings.Height;
                            this.AddChild(webBlock);
                            this.Validate();
                            webBlock.WebPageUrl = this._Item.Url;
                            this._State = MessagePlayState.IsLoaded;
                            this.NotifyStateChangeAsync();
                            break;
                        }
                }
            }
            Play() {
                if (this._State !== MessagePlayState.IsLoaded &&
                    this._State !== MessagePlayState.IsPlaying &&
                    this._State !== MessagePlayState.IsFinished) {
                    throw new Error(Playback.ErrorPhrases.InvalidOperation('PlayState must be IsLoaded, IsPlaying or IsFinished'));
                }
                switch (this._Item.Kind) {
                    case MessageKind.Buffer:
                    case MessageKind.Text:
                    case MessageKind.Image:
                    case MessageKind.WebPage:
                        {
                            this._State = MessagePlayState.IsPlaying;
                            this.NotifyStateChangeAsync();
                            this.StartDurationCountdown();
                            break;
                        }
                    case MessageKind.Video:
                        {
                            if (this.Children.length === 1) {
                                let videoBlock = this.Children[0];
                                videoBlock.Play();
                                this._State = MessagePlayState.IsPlaying;
                                this.NotifyStateChangeAsync();
                            }
                        }
                }
            }
            Stop() {
                if (this._State === MessagePlayState.IsPlaying) {
                    this.CancelDurationCountdown();
                    switch (this._Item.Kind) {
                        case MessageKind.Buffer:
                        case MessageKind.Text:
                        case MessageKind.Image:
                        case MessageKind.WebPage:
                            {
                                this._State = MessagePlayState.IsLoaded;
                                break;
                            }
                        case MessageKind.Video:
                            {
                                this._State = MessagePlayState.IsLoaded;
                                if (this.Children.length === 1) {
                                    let videoBlock = this.Children[0];
                                    videoBlock.Pause();
                                }
                                break;
                            }
                    }
                }
            }
            ResizeView(width, height) {
                if (Playback.Is.Nothing(width))
                    throw new Error(Playback.ErrorPhrases.IsRequired('width'));
                if (Playback.Is.Nothing(height))
                    throw new Error(Playback.ErrorPhrases.IsRequired('height'));
                this.Settings.Width = width;
                this.Settings.Height = height;
                switch (this._Item.Kind) {
                    case MessageKind.Buffer:
                        {
                            break;
                        }
                    case MessageKind.Text:
                    case MessageKind.WebPage:
                        {
                            if (this.Children.length === 1) {
                                this.Children[0].Settings.Width = width;
                                this.Children[0].Settings.Height = height;
                            }
                            break;
                        }
                    case MessageKind.Image:
                    case MessageKind.Video:
                        {
                            if (this.Children.length === 1) {
                                let block = this.Children[0];
                                block.Settings.X = 0;
                                block.Settings.Y = 0;
                                block.Settings.Width = width;
                                block.Settings.Height = height;
                                if (Playback.Is.Something(this._Item.Width) && Playback.Is.Something(this._Item.Height)) {
                                    let naturalRatio = this._Item.Width / this._Item.Height;
                                    let thisRatio = width / height;
                                    if (thisRatio > naturalRatio) {
                                        block.Settings.Height = height;
                                        block.Settings.Width = Math.floor(this._Item.Width * height / this._Item.Height);
                                    }
                                    else {
                                        block.Settings.Width = width;
                                        block.Settings.Height = Math.floor(this._Item.Height * width / this._Item.Width);
                                    }
                                    block.Settings.X = Math.floor((width - block.Settings.Width) / 2);
                                    block.Settings.Y = Math.floor((height - block.Settings.Height) / 2);
                                }
                            }
                            break;
                        }
                }
            }
            CancelDurationCountdown() {
                if (this._DurationTimeoutId > -1) {
                    window.clearTimeout(this._DurationTimeoutId);
                    this._DurationTimeoutId = -1;
                    Playback.Log.Instance.LogFreeTimeout(this.Id + '.DurationCountdown');
                }
            }
            HandleImageLoadFailed() {
                this._State = MessagePlayState.IsUnableToLoad;
                this.NotifyStateChange();
            }
            HandleImageLoadSucceeded() {
                this._State = MessagePlayState.IsLoaded;
                this.NotifyStateChange();
            }
            HandleVideoEnded() {
                this._State = MessagePlayState.IsFinished;
                this.NotifyStateChange();
            }
            HandleVideoIsReady() {
                this._State = MessagePlayState.IsLoaded;
                this.NotifyStateChange();
            }
            HandleVideoFailed() {
                this._State = MessagePlayState.IsUnableToPlay;
                this.NotifyStateChange();
            }
            NotifyStateChange() {
                if (this._AsyncId > -1) {
                    window.clearTimeout(this._AsyncId);
                    this._AsyncId = -1;
                    Playback.Log.Instance.LogFreeTimeout(this.Id + '.NotifyStateChangeAsync');
                }
                if (Playback.Is.Something(this._StateCallback) && Playback.Is.Something(this._StateCallbacksThis)) {
                    try {
                        this._StateCallback.call(this._StateCallbacksThis, this, this._State);
                    }
                    catch (error) {
                        Playback.Log.Instance.LogError(error);
                    }
                }
            }
            NotifyStateChangeAsync() {
                this._AsyncId = window.setTimeout(() => { this.NotifyStateChange(); }, Playback.Intervals.NotificationDelay);
                Playback.Log.Instance.LogAllocTimeout(this.Id + '.NotifyStateChangeAsync');
            }
            StartDurationCountdown() {
                if (this._DurationTimeoutId < 0 && Playback.Is.Something(this._Item.Duration) && this._Item.Duration > 0) {
                    this._DurationTimeoutId = window.setTimeout(() => { this.FinishDurationCountdown(); }, this._Item.Duration * 1000);
                    Playback.Log.Instance.LogAllocTimeout(this.Id + '.DurationCountdown');
                }
            }
            FinishDurationCountdown() {
                this.CancelDurationCountdown();
                this._State = MessagePlayState.IsFinished;
                this.NotifyStateChange();
            }
            ValidateItem(item) {
                if (Playback.Is.Nothing(item))
                    throw new Error(Playback.ErrorPhrases.IsRequired('MessageItem'));
                if (Playback.Is.Nothing(item.Kind))
                    throw new Error(Playback.ErrorPhrases.IsRequired('MessageKind'));
                switch (item.Kind) {
                    case MessageKind.Text:
                        {
                            if (Playback.Is.NoText(item.Text))
                                throw new Error(Playback.ErrorPhrases.IsRequired('Text'));
                            break;
                        }
                    case MessageKind.Image:
                    case MessageKind.Video:
                    case MessageKind.WebPage:
                        {
                            if (Playback.Is.NoText(item.Url))
                                throw new Error(Playback.ErrorPhrases.IsRequired('Url'));
                            break;
                        }
                }
            }
        }
        Playback.MessageView = MessageView;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class ViewPlayState {
            constructor() {
                this.CanGoNext = false;
                this.CanGoPrevious = false;
                this.CanPlay = false;
                this.IsPlaying = false;
            }
        }
        Playback.ViewPlayState = ViewPlayState;
        class MessagesView extends Playback.UiElement {
            constructor(idBase, controller, autoPlays, loops, noMessagesText, noMoreText) {
                super();
                this._AsyncId = -1;
                this._AutoPlays = false;
                this._Controller = null;
                this._CurrentIndex = -1;
                this._InitializationIndex = -1;
                this._IsPlaybackLocked = false;
                this._Loops = false;
                this._MessageItems = null;
                this._NoMessagesText = null;
                this._NoMoreText = null;
                this._OffStageMessage = null;
                this._OnStageMessage = null;
                this._PlayableItems = null;
                this._PlayState = null;
                this._Transitioner = null;
                this._IndexFailed = -1;
                this._IndexFirst = 3;
                this._IndexLast = 2;
                this._IndexLooped = 1;
                this._IndexSucceeded = 0;
                if (Playback.Is.NoText(idBase))
                    throw new Error(Playback.ErrorPhrases.IsRequired('idBase'));
                if (Playback.Is.Nothing(controller))
                    throw new Error(Playback.ErrorPhrases.IsRequired('controller'));
                if (Playback.Is.Nothing(autoPlays))
                    throw new Error(Playback.ErrorPhrases.IsRequired('autoPlays'));
                if (Playback.Is.Nothing(loops))
                    throw new Error(Playback.ErrorPhrases.IsRequired('loops'));
                this._AutoPlays = autoPlays;
                this._Controller = controller;
                this._Loops = loops;
                this._NoMessagesText = Playback.Is.NoText(noMessagesText) ? Playback.UiLocalizer.Instance.Text.NoMessages : noMessagesText;
                this._NoMoreText = Playback.Is.NoText(noMoreText) ? Playback.UiLocalizer.Instance.Text.NoMoreMessages : noMoreText;
                this._PlayState = new ViewPlayState();
                this.OnDispose = this.HandleDispose;
                let id = this.GenerateId(idBase);
                this.Instantiate(Playback.TagNames.Div, id, Playback.UiBoxKind.Block, true);
                this._Transitioner = new Playback.Transitioner(id, this.HandleTransitionCompleted, this);
            }
            HandleDispose() {
                if (Playback.Is.Something(this._Transitioner)) {
                    this._Transitioner.Dispose();
                    this._Transitioner = null;
                }
                this._OffStageMessage = null;
                this._OnStageMessage = null;
                this._Controller = null;
                this._MessageItems = null;
                this._PlayableItems = null;
                this._PlayState = null;
            }
            GenerateCssTransitions() {
                if (Playback.Is.Nothing(this.Settings.Width))
                    throw new Error(Playback.ErrorPhrases.IsRequired('Settings.Width'));
                if (Playback.Is.Nothing(this.Settings.Height))
                    throw new Error(Playback.ErrorPhrases.IsRequired('Settings.Height'));
                return (this._Transitioner.GenerateCssRules(this.Settings.Width, this.Settings.Height));
            }
            Next() {
                this.PerformNext(true, false);
            }
            Play() {
                this.PerformPlay(true, false);
            }
            Previous() {
                this.PerformPrevious(true, false);
            }
            ResizeView(width, height) {
                if (Playback.Is.Nothing(width))
                    throw new Error(Playback.ErrorPhrases.IsRequired('width'));
                if (Playback.Is.Nothing(height))
                    throw new Error(Playback.ErrorPhrases.IsRequired('height'));
                this.Settings.Width = width;
                this.Settings.Height = height;
                for (const child of this.Children) {
                    let childView = child;
                    if (Playback.Is.Something(childView)) {
                        childView.ResizeView(width, height);
                    }
                }
            }
            Stop() {
                this.PerformStop(true, false);
            }
            get PlayableItems() { return (this._PlayableItems); }
            set PlayableItems(items) {
                if (Playback.Is.Nothing(items))
                    throw new Error(Playback.ErrorPhrases.IsRequired('items'));
                if (this._PlayState.IsPlaying) {
                    this.PerformStop(false, false);
                    this._AutoPlays = true;
                }
                this._PlayState = new ViewPlayState();
                if (Playback.Is.Something(this._OnStageMessage)) {
                    this.RemoveChild(this._OnStageMessage, true);
                    this._OnStageMessage = null;
                }
                if (Playback.Is.Something(this._OffStageMessage)) {
                    this.RemoveChild(this._OffStageMessage, true);
                    this._OffStageMessage = null;
                }
                this._CurrentIndex = -1;
                this._PlayableItems = items;
                this._MessageItems = [];
                this._InitializationIndex = -1;
                this.PerformInitialization(false, null);
            }
            DecrementCurrentIndex() {
                let result = this._IndexFailed;
                do {
                    let saveIndex = this._CurrentIndex;
                    if (this._MessageItems.length === 0)
                        break;
                    this._CurrentIndex--;
                    if (this._CurrentIndex > (this._MessageItems.length - 1))
                        this._CurrentIndex = this._MessageItems.length - 1;
                    if (this._CurrentIndex >= 0) {
                        result = this._IndexSucceeded;
                        if (this._CurrentIndex === 0)
                            result = this._IndexFirst;
                        break;
                    }
                    this._CurrentIndex = saveIndex;
                } while (false);
                return (result);
            }
            HaltPlaybackNoNext() {
                Playback.Log.Instance.LogError(new Error('HaltPlaybackNoNext'));
                if (Playback.Is.Something(this._OnStageMessage)) {
                    this.RemoveChild(this._OnStageMessage, true);
                    this._OnStageMessage = null;
                }
                if (Playback.Is.Something(this._OffStageMessage)) {
                    this.RemoveChild(this._OffStageMessage, true);
                    this._OffStageMessage = null;
                }
                this._CurrentIndex = -1;
                this._OnStageMessage = new Playback.MessageView(this.Id + 'nonext', this.Settings.Width, this.Settings.Height, Playback.MessageItem.TextFactory(Playback.UiLocalizer.Instance.Text.UnexpectedNoNextMessage, Playback.Transitioner.NewCutTransition()), this.HandleMessageViewStateChanged, this);
                this._OnStageMessage.Settings.CssClass = this._Transitioner.OnStageSelector;
                this._OnStageMessage.Settings.IgnoreCoord = false;
                this._OnStageMessage.Validate();
                this.AddChild(this._OnStageMessage);
                this._OnStageMessage.Load();
                this._IsPlaybackLocked = true;
                this._PlayState.CanGoPrevious = false;
                this._PlayState.CanGoPrevious = false;
                this._PlayState.CanPlay = false;
                this._PlayState.IsPlaying = false;
                this.NotifyStateChangeAsync();
            }
            HandleInitializationDownloadCompleted(text) {
                this.PerformInitialization(true, text);
            }
            HandleMessageViewStateChanged(view, playState) {
                try {
                    if (Playback.Is.Nothing(view))
                        throw new Error(Playback.ErrorPhrases.IsRequired('view'));
                    if (Playback.Is.Nothing(playState))
                        throw new Error(Playback.ErrorPhrases.IsRequired('playState'));
                    if (!this._IsPlaybackLocked) {
                        if (view === this._OnStageMessage) {
                            switch (playState) {
                                case Playback.MessagePlayState.IsFinished:
                                    {
                                        Playback.Log.Instance.LogInfo('HandleMessageViewStateChanged OnStage IsFinished');
                                        let result = this.IncrementCurrentIndex();
                                        if (result === this._IndexFailed)
                                            this.HaltPlaybackNoNext();
                                        else {
                                            if (result === this._IndexLooped) {
                                                if (this._Controller.NotifyLooping(this)) {
                                                    this.LoadCurrentItem();
                                                    this.NotifyStateChange();
                                                }
                                            }
                                            else {
                                                this.LoadCurrentItem();
                                                this.NotifyStateChange();
                                            }
                                        }
                                        break;
                                    }
                                case Playback.MessagePlayState.IsLoaded:
                                    {
                                        Playback.Log.Instance.LogInfo('HandleMessageViewStateChanged OnStage IsLoaded');
                                        this._OnStageMessage.Play();
                                        break;
                                    }
                            }
                        }
                        else if (view === this._OffStageMessage) {
                            switch (playState) {
                                case Playback.MessagePlayState.IsLoaded:
                                    {
                                        Playback.Log.Instance.LogInfo('HandleMessageViewStateChanged OffStage IsLoaded');
                                        this._OffStageMessage.Play();
                                        break;
                                    }
                                case Playback.MessagePlayState.IsPlaying:
                                    {
                                        Playback.Log.Instance.LogInfo('HandleMessageViewStateChanged OffStage IsPlaying');
                                        this._Transitioner.StartTransition(this._OnStageMessage, this._OffStageMessage, this._MessageItems[this._CurrentIndex].Transition);
                                        break;
                                    }
                                case Playback.MessagePlayState.IsUnableToLoad:
                                case Playback.MessagePlayState.IsUnableToPlay:
                                    {
                                        switch (playState) {
                                            case Playback.MessagePlayState.IsUnableToLoad:
                                                {
                                                    Playback.Log.Instance.LogInfo('HandleMessageViewStateChanged OffStage IsUnableToLoad');
                                                    break;
                                                }
                                            case Playback.MessagePlayState.IsUnableToPlay:
                                                {
                                                    Playback.Log.Instance.LogInfo('HandleMessageViewStateChanged OffStage IsUnableToPlay');
                                                    break;
                                                }
                                        }
                                        if (Playback.Is.Something(this._OffStageMessage)) {
                                            this.RemoveChild(this._OffStageMessage, true);
                                            this._OffStageMessage = null;
                                        }
                                        let result = this.IncrementCurrentIndex();
                                        if (result === this._IndexFailed)
                                            this.HaltPlaybackNoNext();
                                        else {
                                            if (result === this._IndexLooped)
                                                this._Controller.NotifyLooping(this);
                                            this.LoadCurrentItem();
                                            this.NotifyStateChange();
                                        }
                                        break;
                                    }
                            }
                        }
                    }
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleTransitionCompleted(success) {
                if (!success)
                    Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.InvalidOperation('Transition failed: debug')));
                else {
                    if (!this._IsPlaybackLocked) {
                        if (Playback.Is.Something(this._OnStageMessage)) {
                            this.RemoveChild(this._OnStageMessage, true);
                            this._OnStageMessage = null;
                        }
                        this._OnStageMessage = this._OffStageMessage;
                        this._OffStageMessage = null;
                    }
                }
            }
            IncrementCurrentIndex() {
                let result = this._IndexFailed;
                do {
                    let saveIndex = this._CurrentIndex;
                    if (this._MessageItems.length === 0)
                        break;
                    this._CurrentIndex++;
                    if (this._CurrentIndex < 0)
                        this._CurrentIndex = 0;
                    if (this._CurrentIndex < this._MessageItems.length) {
                        result = this._IndexSucceeded;
                        if (this._CurrentIndex == (this._MessageItems.length - 1))
                            result = this._IndexLast;
                        break;
                    }
                    if (this._Loops) {
                        this._CurrentIndex = 0;
                        result = this._IndexLooped;
                        break;
                    }
                    this._CurrentIndex = saveIndex;
                } while (false);
                return (result);
            }
            LoadCurrentItem() {
                try {
                    this._PlayState.CanGoPrevious = (this._CurrentIndex > 0);
                    this._PlayState.CanGoNext = (this._CurrentIndex < (this._MessageItems.length - 1));
                    if (!this._PlayState.CanGoNext) {
                        this._PlayState.CanGoNext = this._Loops;
                    }
                    this._PlayState.IsPlaying = true;
                    let messageItem = this._MessageItems[this._CurrentIndex];
                    this._OffStageMessage = new Playback.MessageView(this.Id + 'message', this.Settings.Width, this.Settings.Height, messageItem, this.HandleMessageViewStateChanged, this);
                    this._OffStageMessage.Settings.CssClass = this._Transitioner.OffStageSelector;
                    this._OffStageMessage.Settings.IgnoreCoord = true;
                    this._OffStageMessage.Validate();
                    this.AddChild(this._OffStageMessage);
                    this._OffStageMessage.Load();
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            NotifyStateChange() {
                if (this._AsyncId > -1) {
                    window.clearTimeout(this._AsyncId);
                    this._AsyncId = -1;
                    Playback.Log.Instance.LogFreeTimeout('MessagesView.NotifyStateChangeAsync');
                }
                try {
                    this._Controller.NotifyPlayState(this, JSON.parse(JSON.stringify(this._PlayState)));
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            NotifyStateChangeAsync() {
                this._AsyncId = window.setTimeout(() => { this.NotifyStateChange(); }, Playback.Intervals.NotificationDelay);
                Playback.Log.Instance.LogAllocTimeout('MessagesView.NotifyStateChangeAsync');
            }
            PerformInitialization(isCallback, jsonText) {
                let isDone = false;
                if (isCallback) {
                    let fileContent = null;
                    do {
                        if (Playback.Is.NoText(jsonText)) {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('jsonText')));
                            Playback.Log.Instance.LogInfo('At least one message will be skipped due to missing JSON file');
                            break;
                        }
                        let content = JSON.parse(jsonText);
                        if (Playback.Is.Missing(content.IsVideo)) {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('IsVideo')));
                            break;
                        }
                        if (Playback.Is.Missing(content.Size)) {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('Size')));
                            break;
                        }
                        if (Playback.Is.Missing(content.Urls)) {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.IsRequired('Urls')));
                            break;
                        }
                        if (content.Urls.length === 0) {
                            Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.ExpectedAtLeast('Urls', 1)));
                            break;
                        }
                        fileContent = content;
                    } while (false);
                    if (Playback.Is.Something(fileContent)) {
                        let playableItem = this.PlayableItems[this._InitializationIndex];
                        for (const url of fileContent.Urls) {
                            if (fileContent.IsVideo) {
                                if (this._AutoPlays) {
                                    Playback.Log.Instance.LogError(new Error('Video is being ignored because AutoPlay for videos is not supported by most browsers'));
                                }
                                else {
                                    this._MessageItems.push(Playback.MessageItem.VideoFactory(url, fileContent.MoreInformationUrl, fileContent.Size.Width, fileContent.Size.Height, playableItem.Transition));
                                    Playback.Log.Instance.LogInfo('Video added to _MessageItems');
                                }
                            }
                            else {
                                this._MessageItems.push(Playback.MessageItem.ImageFactory(url, fileContent.MoreInformationUrl, fileContent.IsDataMappedMessage, fileContent.Size.Width, fileContent.Size.Height, playableItem.Dwell, playableItem.Transition));
                                Playback.Log.Instance.LogInfo('Image added to _MessageItems');
                            }
                        }
                    }
                    this.PerformInitialization(false, null);
                }
                else {
                    while (true) {
                        this._InitializationIndex++;
                        if (this._InitializationIndex > (this.PlayableItems.length - 1)) {
                            isDone = true;
                            break;
                        }
                        let playableItem = this.PlayableItems[this._InitializationIndex];
                        if (playableItem.IsWebUrl) {
                            this._MessageItems.push(Playback.MessageItem.WebPageFactory(playableItem.WebUrl, playableItem.Dwell, playableItem.Transition));
                            Playback.Log.Instance.LogInfo('WebPage added to _MessageItems');
                        }
                        else {
                            Playback.UiApp.Instance.DownloadText(playableItem.FileUrl, this.HandleInitializationDownloadCompleted, this);
                            break;
                        }
                    }
                }
                if (isDone) {
                    if (this._PlayableItems.length === 0) {
                        this._MessageItems.push(Playback.MessageItem.TextFactory(this._NoMessagesText, Playback.Transitioner.NewCutTransition()));
                        Playback.Log.Instance.LogInfo('NoMessages added to _MessageItems');
                        this._Controller.NotifyNoContent(this);
                    }
                    else {
                        if (!this._Loops) {
                            this._MessageItems.push(Playback.MessageItem.TextFactory(this._NoMoreText, Playback.Transitioner.NewCutTransition()));
                            Playback.Log.Instance.LogInfo('NoMoreMessages added to _MessageItems');
                        }
                    }
                    this._PlayState.CanPlay = true;
                    if (isCallback)
                        this.NotifyStateChange();
                    else
                        this.NotifyStateChangeAsync();
                    if (this._AutoPlays)
                        this.PerformPlay(true, isCallback);
                }
            }
            PerformNext(notifyController, calledAsync) {
                if (!this._PlayState.CanPlay) {
                    Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.InvalidOperation('PlayableItems have not been assigned yet')));
                }
                else if (!this._IsPlaybackLocked) {
                    this.PerformStop(false, calledAsync);
                    if (this.IncrementCurrentIndex() !== this._IndexFailed) {
                        this.LoadCurrentItem();
                    }
                    else {
                        this.HaltPlaybackNoNext();
                    }
                }
                if (notifyController) {
                    if (calledAsync)
                        this.NotifyStateChange();
                    else
                        this.NotifyStateChangeAsync();
                }
            }
            PerformPlay(notifyController, calledAsync) {
                if (!this._PlayState.CanPlay) {
                    Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.InvalidOperation('PlayableItems have not been assigned yet')));
                }
                else if (!this._IsPlaybackLocked) {
                    if (Playback.Is.Something(this._OnStageMessage)) {
                        this._OnStageMessage.Play();
                    }
                    else {
                        this._OnStageMessage = new Playback.MessageView(this.Id + 'buffer', this.Settings.Width, this.Settings.Height, Playback.MessageItem.BufferFactory(Playback.Transitioner.NewCutTransition()), this.HandleMessageViewStateChanged, this);
                        this._OnStageMessage.Settings.CssClass = this._Transitioner.OnStageSelector;
                        this._OnStageMessage.Settings.IgnoreCoord = true;
                        this._OnStageMessage.Validate();
                        this.AddChild(this._OnStageMessage);
                        this._OnStageMessage.Load();
                        if (this.IncrementCurrentIndex() !== this._IndexFailed) {
                            this.LoadCurrentItem();
                        }
                        else {
                            this.HaltPlaybackNoNext();
                        }
                    }
                    this._PlayState.IsPlaying = true;
                }
                if (notifyController) {
                    if (calledAsync)
                        this.NotifyStateChange();
                    else
                        this.NotifyStateChangeAsync();
                }
            }
            PerformPrevious(notifyController, calledAsync) {
                if (!this._PlayState.CanPlay) {
                    Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.InvalidOperation('PlayableItems have not been assigned yet')));
                }
                else if (!this._IsPlaybackLocked) {
                    this.PerformStop(false, calledAsync);
                    if (this.DecrementCurrentIndex() !== this._IndexFailed) {
                        this.LoadCurrentItem();
                    }
                    else {
                        this.HaltPlaybackNoNext();
                    }
                }
                if (notifyController) {
                    if (calledAsync)
                        this.NotifyStateChange();
                    else
                        this.NotifyStateChangeAsync();
                }
            }
            PerformStop(notifyController, calledAsync) {
                if (!this._PlayState.CanPlay) {
                    Playback.Log.Instance.LogError(new Error(Playback.ErrorPhrases.InvalidOperation('PlayableItems have not been assigned yet')));
                }
                else if (!this._IsPlaybackLocked) {
                    if (Playback.Is.Something(this._OffStageMessage)) {
                        this.RemoveChild(this._OffStageMessage, true);
                        this._OffStageMessage = null;
                    }
                    if (Playback.Is.Something(this._OnStageMessage)) {
                        this._OnStageMessage.Stop();
                    }
                    this._PlayState.IsPlaying = false;
                }
                if (notifyController) {
                    if (calledAsync)
                        this.NotifyStateChange();
                    else
                        this.NotifyStateChangeAsync();
                }
            }
        }
        Playback.MessagesView = MessagesView;
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
var Html5;
(function (Html5) {
    var Playback;
    (function (Playback) {
        class MessagesApp extends Playback.UiApp {
            constructor(context) {
                super('_root');
                this._ButtonBar = null;
                this._ButtonNext = null;
                this._ButtonPlay = null;
                this._ButtonPrevious = null;
                this._ButtonStop = null;
                this._Context = null;
                this._Profile = null;
                this._ResizeListener = null;
                this._StartTimeStamp = new Date().getTime();
                this._View = null;
                if (Playback.Is.Nothing(context))
                    throw new Error(Playback.ErrorPhrases.IsRequired('context'));
                this._Context = context;
                this.OnDispose = this.HandleDispose;
                this.OnStart = this.HandleStart;
            }
            HandleStart(textLoaded) {
                try {
                    do {
                        this.AppElement.Settings.Margin = Playback.UiThickness.Uniform(0);
                        this.AppElement.Settings.Padding = Playback.UiThickness.Uniform(0);
                        this.AppElement.Validate();
                        if (!textLoaded) {
                            this.RunWithNoText();
                            break;
                        }
                        document.title = Playback.UiLocalizer.Instance.Text.MessageVuTitle;
                        let profileUrl = this.ProfileUrl;
                        if (Playback.Is.NoText(profileUrl)) {
                            this.RunWithNoTenantOrProfileId();
                            break;
                        }
                        this.DownloadText(profileUrl, this.HandleDownloadProfileCompleted, this);
                    } while (false);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleDispose() {
                if (Playback.Is.Something(this._ResizeListener)) {
                    try {
                        this._ResizeListener.Dispose();
                    }
                    catch (dex) {
                        Playback.Log.Instance.LogError(dex);
                    }
                }
                this._ResizeListener = null;
                this._ButtonBar = null;
                this._ButtonNext = null;
                this._ButtonPlay = null;
                this._ButtonPrevious = null;
                this._ButtonStop = null;
                this._Context = null;
                this._Profile = null;
                this._View = null;
            }
            NotifyPlayState(view, playState) {
                try {
                    if (Playback.Is.Nothing(playState))
                        throw new Error(Playback.ErrorPhrases.IsRequired('playState'));
                    if (Playback.Is.Something(this._ButtonBar) &&
                        Playback.Is.Something(this._ButtonNext) &&
                        Playback.Is.Something(this._ButtonPlay) &&
                        Playback.Is.Something(this._ButtonPrevious) &&
                        Playback.Is.Something(this._ButtonStop)) {
                        if (!playState.CanPlay) {
                            this._ButtonNext.Settings.IsHidden = true;
                            this._ButtonPlay.Settings.IsHidden = true;
                            this._ButtonPrevious.Settings.IsHidden = true;
                            this._ButtonStop.Settings.IsHidden = true;
                        }
                        else {
                            this._ButtonNext.Settings.IsHidden = !playState.CanGoNext;
                            this._ButtonPlay.Settings.IsHidden = playState.IsPlaying;
                            this._ButtonPrevious.Settings.IsHidden = !playState.CanGoPrevious;
                            this._ButtonStop.Settings.IsHidden = !playState.IsPlaying;
                        }
                        this._ButtonBar.Validate();
                    }
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            NotifyLooping(view) {
                Playback.Log.Instance.LogInfo('NotifyLooping');
                let keepPlaying = true;
                do {
                    let nowTimeStamp = new Date().getTime();
                    if (nowTimeStamp - this._StartTimeStamp < Playback.Intervals.ContentRefresh)
                        break;
                    keepPlaying = false;
                    Playback.Log.Instance.LogImportant('Restarting the application because the content refresh interval has elapsed');
                    this._Context.Restart();
                } while (false);
                return (keepPlaying);
            }
            NotifyNoContent(view) {
                Playback.Log.Instance.LogInfo('NotifyNoContent');
                this._Context.RestartLater(Playback.Intervals.NoContentRefresh);
            }
            HandleButtonBarNextPressed() {
                try {
                    if (Playback.Is.Something(this._View))
                        this._View.Next();
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleButtonBarPlayPressed() {
                try {
                    if (Playback.Is.Something(this._View))
                        this._View.Play();
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleButtonBarPreviousPressed() {
                try {
                    if (Playback.Is.Something(this._View))
                        this._View.Previous();
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleButtonBarStopPressed() {
                try {
                    if (Playback.Is.Something(this._View))
                        this._View.Stop();
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            HandleDownloadProfileCompleted(text) {
                try {
                    do {
                        if (Playback.Is.NoText(text)) {
                            this.RunWithoutProfile();
                            break;
                        }
                        if (!this.ValidateProfile(text)) {
                            this.RunWithInvalidProfile();
                            break;
                        }
                        if (Playback.Is.SomeText(this._Profile.BackgroundColor)) {
                            try {
                                this.AppElement.Settings.Background = Playback.UiColor.FromRgbaString(this._Profile.BackgroundColor);
                            }
                            catch (bgerror) {
                                Playback.Log.Instance.LogError(bgerror);
                            }
                        }
                        if (Playback.Is.SomeText(this._Profile.TextColor)) {
                            try {
                                this.AppElement.Settings.Foreground = Playback.UiColor.FromRgbaString(this._Profile.TextColor);
                            }
                            catch (fgerror) {
                                Playback.Log.Instance.LogError(fgerror);
                            }
                        }
                        let applyMaxSize = true;
                        if (!this._Profile.IsMaximumSize) {
                            if (Playback.Is.Something(this._Profile.Size) &&
                                Playback.Is.Something(this._Profile.Size.Width) &&
                                Playback.Is.Something(this._Profile.Size.Height)) {
                                applyMaxSize = false;
                                this.AppElement.Settings.Width = this._Profile.Size.Width;
                                this.AppElement.Settings.Height = this._Profile.Size.Height;
                            }
                        }
                        if (applyMaxSize) {
                            this.AppElement.Settings.Width = document.documentElement.clientWidth;
                            this.AppElement.Settings.Height = document.documentElement.clientHeight;
                        }
                        this.AppElement.Settings.CanScrollX = false;
                        this.AppElement.Settings.CanScrollY = false;
                        let primaryIconColor = new Playback.UiColor(255, 0, 0, 0);
                        if (Playback.Is.SomeText(this._Profile.ControlsColor))
                            primaryIconColor = Playback.UiColor.FromRgbaString(this._Profile.ControlsColor);
                        if (!Playback.UiIconManager.Instance.IsInitialized) {
                            Playback.UiIconManager.Instance.Initialize(primaryIconColor, this.HandleIconsInitialized, this);
                        }
                        else {
                            this.HandleIconsInitialized(Playback.UiIconManager.Instance.IsInitializedSuccessfully);
                        }
                    } while (false);
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                    this.RunWithUnexpectedError();
                }
            }
            HandleIconsInitialized(success) {
                try {
                    if (success && this._Profile.Controls !== Playback.Html5PlayerControls.None) {
                        this._ButtonBar = new Playback.UiButtonBarBlock('buttonbar', this._Profile.Controls === Playback.Html5PlayerControls.Right, Playback.UiLayoutStrategy.Middle, Playback.UiMetrics.ButtonBarButtonPadding);
                        this._ButtonPrevious = new Playback.UiImageBlock('buttonprevious');
                        this._ButtonPrevious.ImageUrl = this._Profile.Controls === Playback.Html5PlayerControls.Right ?
                            Playback.UiIconManager.Instance.DataUrlVertPrevious :
                            Playback.UiIconManager.Instance.DataUrlHorzPrevious;
                        this._ButtonPrevious.Settings.IsHidden = true;
                        this._ButtonPrevious.Settings.X = 0;
                        this._ButtonPrevious.Settings.Y = 0;
                        this._ButtonPrevious.Settings.Width = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonPrevious.Settings.Height = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonPrevious.NotifyOnClick(this.HandleButtonBarPreviousPressed, this);
                        this._ButtonBar.AddChild(this._ButtonPrevious);
                        this._ButtonPlay = new Playback.UiImageBlock('buttonplay');
                        this._ButtonPlay.ImageUrl = this._Profile.Controls === Playback.Html5PlayerControls.Right ?
                            Playback.UiIconManager.Instance.DataUrlVertPlay :
                            Playback.UiIconManager.Instance.DataUrlHorzPlay;
                        this._ButtonPlay.Settings.IsHidden = true;
                        this._ButtonPlay.Settings.X = 0;
                        this._ButtonPlay.Settings.Y = 0;
                        this._ButtonPlay.Settings.Width = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonPlay.Settings.Height = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonPlay.NotifyOnClick(this.HandleButtonBarPlayPressed, this);
                        this._ButtonBar.AddChild(this._ButtonPlay);
                        this._ButtonStop = new Playback.UiImageBlock('buttonstop');
                        this._ButtonStop.ImageUrl = this._Profile.Controls === Playback.Html5PlayerControls.Right ?
                            Playback.UiIconManager.Instance.DataUrlVertStop :
                            Playback.UiIconManager.Instance.DataUrlHorzStop;
                        this._ButtonStop.Settings.IsHidden = true;
                        this._ButtonStop.Settings.X = 0;
                        this._ButtonStop.Settings.Y = 0;
                        this._ButtonStop.Settings.Width = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonStop.Settings.Height = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonStop.NotifyOnClick(this.HandleButtonBarStopPressed, this);
                        this._ButtonBar.AddChild(this._ButtonStop);
                        this._ButtonNext = new Playback.UiImageBlock('buttonnext');
                        this._ButtonNext.ImageUrl = this._Profile.Controls === Playback.Html5PlayerControls.Right ?
                            Playback.UiIconManager.Instance.DataUrlVertNext :
                            Playback.UiIconManager.Instance.DataUrlHorzNext;
                        this._ButtonNext.Settings.IsHidden = true;
                        this._ButtonNext.Settings.X = 0;
                        this._ButtonNext.Settings.Y = 0;
                        this._ButtonNext.Settings.Width = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonNext.Settings.Height = Playback.UiMetrics.ButtonBarButtonSize;
                        this._ButtonNext.NotifyOnClick(this.HandleButtonBarNextPressed, this);
                        this._ButtonBar.AddChild(this._ButtonNext);
                        this.PlaceButtonBar();
                        this.AppElement.AddChild(this._ButtonBar);
                    }
                    this._View = new Playback.MessagesView('messagesview', this, this._Profile.AutoPlays === true, this._Profile.Loops === true, this._Profile.NoMessageText, this._Profile.NoMoreText);
                    this.PlaceView();
                    this.AppElement.AddChild(this._View);
                    this.RegisterCssTransitions();
                    this.AppElement.Validate();
                    if (this._Profile.IsMaximumSize) {
                        this._ResizeListener = Playback.UiEventListener.FactoryForWindow(Playback.EventNames.Resize, this.HandleResize, this);
                    }
                    if (Playback.Is.Nothing(this._Profile.Items))
                        this._Profile.Items = [];
                    this._View.PlayableItems = JSON.parse(JSON.stringify(this._Profile.Items));
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                    this.RunWithUnexpectedError();
                }
            }
            HandleResize() {
                try {
                    if (Playback.Is.Something(this.AppElement)) {
                        this.AppElement.Settings.Width = document.documentElement.clientWidth;
                        this.AppElement.Settings.Height = document.documentElement.clientHeight;
                        this.PlaceButtonBar();
                        this.PlaceView();
                        this.RegisterCssTransitions();
                        this.AppElement.Validate();
                    }
                }
                catch (error) {
                    Playback.Log.Instance.LogError(error);
                }
            }
            PlaceButtonBar() {
                if (Playback.Is.Something(this._ButtonBar) && this._Profile.Controls !== Playback.Html5PlayerControls.None) {
                    switch (this._Profile.Controls) {
                        case Playback.Html5PlayerControls.Right:
                            {
                                this._ButtonBar.Settings.X = this.AppElement.Settings.Width - Playback.UiMetrics.ButtonBarFixedDimension;
                                this._ButtonBar.Settings.Width = Playback.UiMetrics.ButtonBarFixedDimension;
                                this._ButtonBar.Settings.Y = 0;
                                this._ButtonBar.Settings.Height = this.AppElement.Settings.Height;
                                break;
                            }
                        case Playback.Html5PlayerControls.Bottom:
                            {
                                this._ButtonBar.Settings.X = 0;
                                this._ButtonBar.Settings.Width = this.AppElement.Settings.Width;
                                this._ButtonBar.Settings.Y = this.AppElement.Settings.Height - Playback.UiMetrics.ButtonBarFixedDimension;
                                this._ButtonBar.Settings.Height = Playback.UiMetrics.ButtonBarFixedDimension;
                                break;
                            }
                    }
                }
            }
            PlaceView() {
                if (Playback.Is.Something(this._View)) {
                    this._View.Settings.X = 0;
                    this._View.Settings.Y = 0;
                    if (Playback.Is.Something(this._ButtonBar) && this._Profile.Controls != Playback.Html5PlayerControls.None) {
                        switch (this._Profile.Controls) {
                            case Playback.Html5PlayerControls.Right:
                                {
                                    this._View.ResizeView(this.AppElement.Settings.Width - Playback.UiMetrics.ButtonBarFixedDimension, this.AppElement.Settings.Height);
                                    break;
                                }
                            case Playback.Html5PlayerControls.Bottom:
                                {
                                    this._View.ResizeView(this.AppElement.Settings.Width, this.AppElement.Settings.Height - Playback.UiMetrics.ButtonBarFixedDimension);
                                    break;
                                }
                        }
                    }
                    else {
                        this._View.ResizeView(this.AppElement.Settings.Width, this.AppElement.Settings.Height);
                    }
                }
            }
            RegisterCssTransitions() {
                if (Playback.Is.Something(this._View)) {
                    this.DefineAppStylesheet(this._View.GenerateCssTransitions());
                }
            }
            RunWithInvalidProfile() {
                document.title = Playback.UiLocalizer.Instance.Text.MessageVuErrorTitle;
                this.AppElement.Settings.Width = document.documentElement.clientWidth;
                this.AppElement.Settings.Height = document.documentElement.clientHeight;
                let errorText = new Playback.UiHeading1('error');
                errorText.Text = Playback.UiLocalizer.Instance.Text.MessageVuInvalidProfile;
                let message = new Playback.UiCenteringBlock('centeringblock');
                message.Settings.X = 0;
                message.Settings.Y = 0;
                message.Settings.Width = this.AppElement.Settings.Width;
                message.Settings.Height = this.AppElement.Settings.Height;
                message.AddChild(errorText);
                this.AppElement.AddChild(message);
                this.AppElement.Validate();
            }
            RunWithNoTenantOrProfileId() {
                document.title = Playback.UiLocalizer.Instance.Text.MessageVuErrorTitle;
                this.AppElement.Settings.Width = document.documentElement.clientWidth;
                this.AppElement.Settings.Height = document.documentElement.clientHeight;
                let errorText = new Playback.UiHeading1('error');
                errorText.Text = Playback.UiLocalizer.Instance.Text.MessageVuNoTenantOrProfileId;
                let message = new Playback.UiCenteringBlock('centeringblock');
                message.Settings.X = 0;
                message.Settings.Y = 0;
                message.Settings.Width = this.AppElement.Settings.Width;
                message.Settings.Height = this.AppElement.Settings.Height;
                message.AddChild(errorText);
                this.AppElement.AddChild(message);
                this.AppElement.Validate();
            }
            RunWithNoText() {
                document.title = 'Error';
                this.AppElement.Settings.Width = document.documentElement.clientWidth;
                this.AppElement.Settings.Height = document.documentElement.clientHeight;
                let errorText = new Playback.UiHeading1('error');
                errorText.Text = 'The message playlist viewer failed to initialize.  Please contact support if this happens again.';
                let message = new Playback.UiCenteringBlock('centeringblock');
                message.Settings.X = 0;
                message.Settings.Y = 0;
                message.Settings.Width = this.AppElement.Settings.Width;
                message.Settings.Height = this.AppElement.Settings.Height;
                message.AddChild(errorText);
                this.AppElement.AddChild(message);
                this.AppElement.Validate();
            }
            RunWithoutProfile() {
                document.title = Playback.UiLocalizer.Instance.Text.MessageVuErrorTitle;
                this.AppElement.Settings.Width = document.documentElement.clientWidth;
                this.AppElement.Settings.Height = document.documentElement.clientHeight;
                let errorText = new Playback.UiHeading1('error');
                errorText.Text = Playback.UiLocalizer.Instance.Text.MessageVuCannotLoadProfile;
                let message = new Playback.UiCenteringBlock('centeringblock');
                message.Settings.X = 0;
                message.Settings.Y = 0;
                message.Settings.Width = this.AppElement.Settings.Width;
                message.Settings.Height = this.AppElement.Settings.Height;
                message.AddChild(errorText);
                this.AppElement.AddChild(message);
                this.AppElement.Validate();
            }
            RunWithUnexpectedError() {
                document.title = Playback.UiLocalizer.Instance.Text.MessageVuErrorTitle;
                if (Playback.Is.Nothing(this.AppElement.Settings.Width) ||
                    Playback.Is.Nothing(this.AppElement.Settings.Height)) {
                    this.AppElement.Settings.Width = document.documentElement.clientWidth;
                    this.AppElement.Settings.Height = document.documentElement.clientHeight;
                }
                let errorText = new Playback.UiHeading1('error');
                errorText.Text = Playback.UiLocalizer.Instance.Text.MessageVuUnexpectedError;
                let message = new Playback.UiCenteringBlock('centeringblock');
                message.Settings.X = 0;
                message.Settings.Y = 0;
                message.Settings.Width = this.AppElement.Settings.Width;
                message.Settings.Height = this.AppElement.Settings.Height;
                message.AddChild(errorText);
                this.AppElement.AddChild(message);
                this.AppElement.Validate();
            }
            ValidateProfile(source) {
                let isValid = false;
                do {
                    if (Playback.Is.NoText(source))
                        break;
                    this._Profile = JSON.parse(source);
                    if (Playback.Is.Missing(this._Profile.IsLayoutViewer)) {
                        Playback.Log.Instance.LogInfo(Playback.ErrorPhrases.IsRequired('IsLayoutViewer'));
                        break;
                    }
                    if (this._Profile.IsLayoutViewer === true) {
                        Playback.Log.Instance.LogInfo(Playback.ErrorPhrases.InvalidOperation('IsLayoutViewer is true'));
                        break;
                    }
                    let empty = new Playback.Html5ViewerProfile();
                    if (Playback.Is.Missing(this._Profile.AutoPlays))
                        this._Profile.AutoPlays = empty.AutoPlays;
                    if (Playback.Is.Missing(this._Profile.BackgroundColor))
                        this._Profile.BackgroundColor = empty.BackgroundColor;
                    if (Playback.Is.Missing(this._Profile.Controls))
                        this._Profile.Controls = empty.Controls;
                    if (Playback.Is.Missing(this._Profile.ControlsColor))
                        this._Profile.ControlsColor = empty.ControlsColor;
                    if (Playback.Is.Missing(this._Profile.IsMaximumSize))
                        this._Profile.IsMaximumSize = empty.IsMaximumSize;
                    if (Playback.Is.Missing(this._Profile.Items))
                        this._Profile.Items = empty.Items;
                    if (Playback.Is.Missing(this._Profile.Loops))
                        this._Profile.Loops = empty.Loops;
                    if (Playback.Is.Missing(this._Profile.NoMessageText))
                        this._Profile.NoMessageText = empty.NoMessageText;
                    if (Playback.Is.Missing(this._Profile.NoMoreText))
                        this._Profile.NoMoreText = empty.NoMoreText;
                    if (Playback.Is.Missing(this._Profile.Size))
                        this._Profile.Size = empty.Size;
                    if (Playback.Is.Missing(this._Profile.TextColor))
                        this._Profile.TextColor = empty.TextColor;
                    isValid = true;
                } while (false);
                return (isValid);
            }
        }
        class MessagesAppContext {
            constructor() {
                this._Instance = null;
                this._RestartCompletionId = -1;
            }
            Start() {
                if (Playback.Is.Something(this._Instance))
                    throw new Error(Playback.ErrorPhrases.CallOnlyOnce('Start'));
                this._Instance = new MessagesApp(this);
                this._Instance.Start();
            }
            Restart() {
                if (Playback.Is.Nothing(this._Instance))
                    throw new Error(Playback.ErrorPhrases.IsRequired('_Instance'));
                this.ClearTimeout();
                this._RestartCompletionId = window.setTimeout(() => { this.PerformRestartDelayed(); }, Playback.Intervals.StandardCompletionDelay);
            }
            RestartLater(afterTimeout) {
                if (Playback.Is.Nothing(this._Instance))
                    throw new Error(Playback.ErrorPhrases.IsRequired('_Instance'));
                if (Playback.Is.Nothing(afterTimeout))
                    throw new Error(Playback.ErrorPhrases.IsRequired('afterTimeout'));
                this.ClearTimeout();
                this._RestartCompletionId = window.setTimeout(() => { this.PerformRestartDelayed(); }, afterTimeout);
            }
            ClearTimeout() {
                if (this._RestartCompletionId > -1) {
                    window.clearTimeout(this._RestartCompletionId);
                    this._RestartCompletionId = -1;
                }
            }
            PerformRestartDelayed() {
                this.ClearTimeout();
                try {
                    this._Instance.Dispose();
                    this._Instance = null;
                    this._Instance = new MessagesApp(this);
                    this._Instance.Start();
                }
                catch (derror) {
                    Playback.Log.Instance.LogError(derror);
                }
            }
        }
        let appContext = new MessagesAppContext();
        appContext.Start();
    })(Playback = Html5.Playback || (Html5.Playback = {}));
})(Html5 || (Html5 = {}));
