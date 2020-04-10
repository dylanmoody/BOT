
// import PythonShell from 'python-shell';
//
// options = {
//   mode: 'text',
//   pythonPath : '/usr/bin/python3'
// };


var path = require("path")
// const dialog = require("dialogs")



// dialogs.alert('okidoki', function (ok) {
console.log('alert')
// })

function passForm(shipVals){
  let {PythonShell} = require('python-shell')
  var options = {
    pythonOptions: ['-u'],
    args: [shipVals.elements[1].value],
  }
  // console.log(shipVals.elements[1].value)
  PythonShell.run('../hard soup.py',options,function(err,results) {
    if(err) throw err;
    console.log('results: %j', results);
  })

  // document.getElementById("shippingValues").onsubmit = a => {
  //   a.preventDefault();
  //   // document.getElementById("shippingValuesSubmit").value = "Submitted!";
  //   console.log(document.getElementById('shippingValues'));
  //
  //   PythonShell.run('../soup.py', null, function(err, results) {
  //     if(err) throw err;
  //
  //     console.log('results: %j', results);
  //   });
  //
  //   return false;
  // }
}
