# readme# 🛡️ Sharthi – AI Powered Government Form Guidance Extension

> **Your personal assistant for navigating complex government scholarship and application forms.**

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![Chrome Extension](https://img.shields.io/badge/Platform-Chrome_Extension-green) ![Privacy Focused](https://img.shields.io/badge/Privacy-First-red)

## 🚩 Problem Statement
Students often face rejection in government scholarship applications due to incorrect entries caused by complex language and unclear instructions. Existing help is often scattered or hard to find.

## 💡 What is Sharthi?
**Sharthi** is a Chrome Extension designed to help users understand exactly what to enter in form fields on government portals. It acts as a bridge between complex bureaucratic terms and simple student language.

Crucially, **Sharthi is privacy-first.** It reads the field label (e.g., "Annual Family Income") but **never** reads, stores, or transmits the user's personal data (e.g., "50,000").

## ✨ Key Features
* **🖱️ Context-Aware Help:** A floating button appears when you focus on a field.
* **🧠 Multi-Model AI:** Choose your preferred intelligence:
    * OpenAI GPT-4o
    * Google Gemini 2.0
    * Perplexity Sonar
* **🗣️ Multi-Language Support:** Get explanations in **English, Hindi, or Gujarati**.
* **🔒 Privacy Safe:** Only the *field label* is sent to the AI for analysis. Your personal input stays on your device.
* **🎨 Modern UI:** A clean, gradient-based sidebar interface.

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Core:** Chrome Extension Manifest V3
* **AI Integrations:**
    * OpenAI API
    * Google Gemini API
    * Perplexity API

## 🚀 How It Works
1.  **Focus:** Click on any input field (e.g., PAN Card Number, IFSC Code).
2.  **Activate:** Click the floating "Sharthi" button.
3.  **Select:** Choose your preferred language and AI model.
4.  **Understand:** The extension analyzes the label and explains what information is required (e.g., *"Enter the 11-digit alphanumeric code printed on your chequebook"*).

## 📥 Installation

1.  Clone this repository:
    ```bash
    git clone [https://github.com/yourusername/sharthi-extension.git](https://github.com/yourusername/sharthi-extension.git)
    ```
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Toggle **Developer mode** (top right).
4.  Click **Load unpacked** and select the project folder.
5.  Pin the Sharthi extension to your browser toolbar.

## 🔮 Future Roadmap
* [ ] Voice-based guidance (Text-to-Speech)
* [ ] Dark Mode support
* [ ] Offline rule-based help for common fields
* [ ] Support for additional regional languages

## 📄 License
This project is licensed under the MIT License.
