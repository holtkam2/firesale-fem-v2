const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 480,
    icon: path.join(__dirname, 'assets/icons/mac/icons.icns')
  })

  // and load the index.html of the app.
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  // and load the url of the app.
  mainWindow.loadURL('http://localhost:3000/#/')
})
