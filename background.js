chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("medium.com")
  ) {
    chrome.scripting.executeScript({
      target: { tabId },
      func: confirmRedirect,
      args: [tab.url],
    });
  }
});

function confirmRedirect(url) {
  const shouldRedirect = confirm("Do you want to read this on Freedium?");
  if (shouldRedirect) {
    const encoded = encodeURIComponent(url);
    window.location.href = `https://freedium.cfd/${encoded}`;
  }
}
