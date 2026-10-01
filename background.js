const MENU_ID = "search-openwork";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "「%s」をOpenWorkで検索",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) {
    return;
  }

  const query = `site:openwork.jp ${info.selectionText.trim()}`;
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  chrome.tabs.create({ url });
});
