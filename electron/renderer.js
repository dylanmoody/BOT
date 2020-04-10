var path = require("path")
const { ipcRenderer, remote } = require( "electron" );
// const dialog = require("dialogs")


function createShippingValues(shipVals) {
  var shipInfo = [];
  for (let i=0; i<shipVals.elements.length-1; i++){
    shipInfo.push(shipVals.elements[i].value);
  }
  ipcRenderer.send("setShippingValues", shipInfo);
}

function createProductValues(prodVals) {
  var prodInfo = [];
  for (let i=0; i<prodVals.elements.length-1; i++){
    prodInfo.push(prodVals.elements[i].value);
  }
  ipcRenderer.send("setProduct", prodInfo);
}

function runBot(){
  let {PythonShell} = require('python-shell')

  var shipInfo = remote.getGlobal( "shippingValues" );
  var product = remote.getGlobal( "productValues" );
  console.log(shipInfo);

  var options = {
    pythonOptions: ['-u'],
    args: product.concat( shipInfo ),
  }
  // console.log(shipVals.elements[1].value)
  PythonShell.run('../hard soup.py',options,function(err,results) {
    if(err) throw err;
    console.log('results: %j', results);
  })
}
