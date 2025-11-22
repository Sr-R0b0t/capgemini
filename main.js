const { app, BrowserWindow, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.on('ready', () => {
  createWindow();

  // CONFIGURAR LOG
  autoUpdater.logger = require("electron-log");
  autoUpdater.logger.transports.file.level = "info";

  // VERIFICAR ATUALIZAÇÃO
  autoUpdater.checkForUpdates();

  // ATUALIZAÇÃO DISPONÍVEL
  autoUpdater.on("update-available", () => {
    dialog.showMessageBox({
      type: "info",
      title: "Atualização disponível",
      message: "Uma nova versão está disponível. Baixando...",
      buttons: ["Ok"]
    });
  });

  // NENHUMA ATUALIZAÇÃO
  autoUpdater.on("update-not-available", () => {
    console.log("Nenhuma atualização disponível.");
  });

  // DOWNLOAD CONCLUÍDO
  autoUpdater.on("update-downloaded", () => {
    dialog.showMessageBox({
      type: "question",
      buttons: ["Instalar e reiniciar", "Agora não"],
      defaultId: 0,
      message: "A atualização foi baixada. Deseja instalar agora?"
    }).then(result => {
      if (result.response === 0) {
        autoUpdater.quitAndInstall();
      }
    });
  });
});
