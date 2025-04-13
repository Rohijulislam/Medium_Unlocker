# 📰 Medium to Freedium Redirect Extension

A simple and elegant Chrome extension that prompts you to redirect Medium articles to [freedium.cfd](https://freedium.cfd), so you can read without paywalls or limits.

---

## ✨ Features

- Detects Medium article pages (including custom domains like `username.medium.com`)
- Prompts user with a friendly popup: "Do you want to read this on Freedium?"
- Redirects seamlessly to the equivalent `https://freedium.cfd` URL
- Lightweight and privacy-friendly (no tracking)

---
## 📦 Installation (via Chrome)

1. Download or clone this repository:
   ```bash
   git clone https://github.com/Rohijulislam/Medium_Unlocker.git
2. Open Chrome and navigate to:
   ```bash
   chrome://extensions/
3. Enable Developer Mode (top-right corner)
4. Click "Load unpacked"
5. Select the folder where you cloned/downloaded this repo
6. ✅ Done! The extension will now monitor Medium pages and prompt for redirection

---
## ⚙️ How It Works

Whenever you visit a Medium article (e.g., https://medium.com/... or https://username.medium.com/...), the extension shows a popup asking:
"Do you want to read this on Freedium?"

If you click OK, you're redirected to: https://freedium.cfd/<encoded-medium-url> . If you click Cancel, the page continues as normal.

---
## ⚙️ Future Improvements
- Add a custom-styled popup instead of browser alert
- Auto-redirect without asking (toggle setting)
- Whitelist/blacklist feature
- Firefox support
---

## 🤝 Contributing
Pull requests welcome! If you have ideas or run into issues, feel free to open an issue or PR.
