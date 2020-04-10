const {app, BrowserWindow} = require('electron');

function createWindow () {
  window = new BrowserWindow({
  	width: 800, 
  	height: 600,
  	webPreferences: {
  		nodeIntegration: true
  	}
  })
  window.openDevTools()
  window.loadFile('start.html')

}
app.on('ready', createWindow)
