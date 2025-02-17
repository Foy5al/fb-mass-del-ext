export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  chrome.runtime.onInstalled.addListener(() => {
    console.log("Facebook Message Cleaner installed.");
  });

  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type === "DELETE_CONVERSATION" && sender.tab?.id) {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: (conversationId: string) => {
          const element = document.querySelector(
            `[data-id="${conversationId}"]`
          );
          if (element) {
            const deleteButton = element.querySelector(
              '[aria-label="Delete"]'
            ) as HTMLElement;
            deleteButton?.click();
          }
        },
        args: [message.id],
      });
    }
  });
});
