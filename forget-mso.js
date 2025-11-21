/*
Generic error logger.
*/
function onError(e) {
  console.error(e);
}

function onRemoved() {
  console.log("Removed cookies for office.com");
}

/*
Forget cookies for office.com, to avoid circular "Please wait while we log you out shit..."
*/
function forget() {
  let options = {
    hostnames: ["office.com", "outlook.office.com"]
  }
  
  let types = {
    cookies: true,
    localStorage: true
  }
  
  browser.browsingData.remove(options, types).then(onRemoved, onError);
}

/*
On click, forget cookies for office.com.
*/
browser.browserAction.onClicked.addListener(forget);

