let reveal_timeout = 0;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ reveal_timeout });
});
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});
