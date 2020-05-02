const {app, BrowserWindow, ipcMain} = require('electron');

function createWindow () {
  window = new BrowserWindow({
  	width: 800,
  	height: 600,
    show: false,
  	webPreferences: {
  		nodeIntegration: true
  	}
  })
  window.openDevTools()
  window.once('ready-to-show', () => {
    window.show()
  })
  window.loadFile('src/index.html')

}
app.on('ready', createWindow)


ipcMain.on( "setShippingValues", ( event, shipping ) => {
  global.shippingValues = shipping;
} );

ipcMain.on( "setProduct", ( event, product ) => {
  global.productValues = product;
} );
