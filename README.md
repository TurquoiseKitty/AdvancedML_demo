# Supermarket Basket Web App

This project is a small interactive demo that mimics buying food in a supermarket. Click the available items to move them into your basket, remove items from the basket with a click, and create custom tags by submitting the input form.

## Project Structure

- `index.html` – page markup.
- `styles.css` – visual styling for the app.
- `script.js` – interactive behavior for adding and removing basket tags.
- `package.json` – development dependency and start script for a local static server.

## Requirements

Install the following before running the project:

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm`).
- `http-server` (installed automatically via `npm install`).

## Local Development (Windows)

1. **Clone or download** this repository onto your Windows machine.
2. **Open PowerShell** (or Command Prompt) in the project folder.
3. **Install dependencies**:
   ```powershell
   npm install
   ```
4. **Start the local server**:
   ```powershell
   npm run start
   ```
5. **Open your browser** and visit [http://localhost:5173](http://localhost:5173) to interact with the web app.

When you are finished, stop the server with `Ctrl + C` in the terminal window.

## Notes

- The available items (`watermelon`, `grape`, `carrot`, `steak`) remain clickable so you can add multiple copies to your basket.
- Custom items created via the input form immediately appear in the basket and can be removed with a click, just like the predefined tags.
