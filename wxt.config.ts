import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    manifest_version: 3,
    name: "Facebook Mass Delete",
    version: "0.0.1",
    description: "Extension for deleting multiple messages",
    background: {
      service_worker: "background.js",
    },
    content_scripts: [
      {
        matches: ["*://*.facebook.com/*"],
        js: ["content.js"],
      },
    ],
    action: {
      default_popup: "popup.html",
    },
    permissions: ["storage"],
  },
});
