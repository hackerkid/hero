chrome.tabs.onActivated.addListener(function(x) {
  chrome.tabs.getSelected(null, function(tab) {
    var currentURL = tab.url;
  });
});