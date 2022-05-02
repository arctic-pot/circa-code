// Modules to control application life and create native browser window
import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, '../preload/preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
    show: false,
  });

  mainWindow.loadFile('dist/renderer/index.html').then();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.maximize();
    mainWindow.webContents.openDevTools();
  });
}
app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
