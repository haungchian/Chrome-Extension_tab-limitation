console.log("background loaded");



chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': "https://www.google.com"}, function(tab) {
    console.log("tab opened");


  });
  chrome.tabs.create({ },function(tab) {
  setTimeout(function(){chrome.tabs.remove(tab.id);}, 50000);
  chrome.browserAction.setBadgeText({text: 'on'});
  console.log("tab opened");
  });




  // chrome.tabs.executeScript({file: 'content_script.js'}, function() {
  //     console.log('background script injected content_script');
  //   });

});
