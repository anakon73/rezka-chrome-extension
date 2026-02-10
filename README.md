# Chrome Extension: IMDb → Rezka Button

This Chrome extension injects a button on IMDb movie pages. It fetches movie data from a local API and creates a link to the corresponding page on **Rezka**.

---

## Features

- Finds the movie title and year on IMDb
- Fetches the corresponding URL from your local API (e.g., `<api-url>/<title>+<year>`)
- Adds a styled button next to the movie title
- Fully inline CSS styles — no external classes or Tailwind used
- Opens Rezka page in a new tab

---

## Project Structure

```bash
chrome-extension-vue/
├─ package.json
├─ vite.config.ts
├─ manifest.json
├─ index.html ← Popup
├─ src/
│ ├─ popup/
│ │ ├─ main.ts
│ │ ├─ App.vue
│ │ └─ style.css
│ └─ content/
│ └─ inject.ts ← Script
```

## Installation

Clone the repository

Build with Vite:

```bash
pnpm install
pnpm run build
```

Open Chrome → chrome://extensions/

Enable Developer Mode

Click Load unpacked → select the dist folder

Open any IMDb movie page and the button should appear next to the title
