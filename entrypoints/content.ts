export default defineContentScript({
  matches: ["*://*.facebook.com/*"],
  main() {
    console.log("Hello content.");

    // This script runs in the context of Facebook Messenger
    function getConversations() {
      const conversations: { id: string; name: string }[] = [];
      const elements = document.querySelectorAll('[role="gridcell"]');

      elements.forEach((el) => {
        const nameElement = el.querySelector('span[dir="auto"]');
        if (nameElement) {
          const name = nameElement.textContent || "Unnamed";
          const id = el.getAttribute("data-id") || "";
          conversations.push({ id, name });
        }
      });

      // Send data back to the extension
      chrome.runtime.sendMessage({
        type: "CONVERSATIONS",
        data: conversations,
      });
    }

    getConversations();
  },
});
