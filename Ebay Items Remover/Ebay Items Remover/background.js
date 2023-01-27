chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.recieved == "yes") {
    console.log(request.href);
    fetch(request.href)
      .then((res) => res.text())
      .then(function (webPageHTML) {
        sendResponse({ html: webPageHTML, href: request.href});
      });
  }
  return true;
});
