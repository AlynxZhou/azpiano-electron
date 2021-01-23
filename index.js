const path = require("path");
const {app, BrowserWindow} = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    "width": 1280,
    "height": 960,
  });

  win.loadFile("./static/index.html");
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
