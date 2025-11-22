<<<<<<< HEAD
const { app, BrowserWindow, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
=======
const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
>>>>>>> e0256e6ceac45dfdb00768de7a452fd455780d68

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
<<<<<<< HEAD
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.on('ready', () => {
  createWindow();

  // Canal para logs
  autoUpdater.logger = require("electron-log");
  autoUpdater.logger.transports.file.level = "info";

  // Verifica atualização
  autoUpdater.checkForUpdates();

  // Nova atualização encontrada
  autoUpdater.on("update-available", () => {
    dialog.showMessageBox({
      type: "info",
      title: "Atualização disponível",
      message: "Uma nova versão está disponível. Baixando...",
      buttons: ["Ok"]
    });
  });

  // Nada novo
  autoUpdater.on("update-not-available", () => {
    console.log("Nenhuma atualização disponível.");
  });

  // Download concluído
  autoUpdater.on("update-downloaded", () => {
    dialog.showMessageBox({
      type: "question",
      buttons: ["Instalar e reiniciar", "Agora não"],
      defaultId: 0,
      message: "A atualização foi baixada. Deseja instalar agora?"
    }).then(result => {
      if (result.response === 0) autoUpdater.quitAndInstall();
    });
  });
});
=======
    webPreferences: { nodeIntegration: true }
  });
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});
>>>>>>> e0256e6ceac45dfdb00768de7a452fd455780d68
