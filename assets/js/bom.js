// Location Information ( Location Object)

let locationHref = location.href;
let locationProtocol = location.protocol;
let locationHost = location.host;
let locationPort = location.port;
let locationHostName = location.hostname;

// Browser Information (Navigator Object)
let navigatorAppName = navigator.appName;
let navigatorAppVersion = navigator.appVersion;
let navigatorPlatform = navigator.platform;
let navigatorLanguage = navigator.language;
let navigatorCookieEnabled = navigator.cookieEnabled;

// Screen Information ( Screen Object)
let screenHeight = screen.height;
let screenWidth = screen.width;
let screenPixelDepth = screen.pixelDepth;

// History Information (History Object)
let historyLength = history.length;
let historyState = history.state;

let valuesArray = [
  locationHref,
  locationProtocol,
  locationHost,
  locationPort,
  locationHostName,
  navigatorAppName,
  navigatorAppVersion,
  navigatorPlatform,
  navigatorLanguage,
  navigatorCookieEnabled,
  screenHeight,
  screenWidth,
  screenPixelDepth,
  historyLength,
  historyState,
];

let collectionItems = document.querySelectorAll(".badge");
let collectionItemsArray = Array.from(collectionItems);

for (var i = 0; i < valuesArray.length; i++) {
  collectionItems[i].innerHTML = valuesArray[i];
}
