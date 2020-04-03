
// import PythonShell from 'python-shell';
// 
// options = {
//   mode: 'text',
//   pythonPath : '/usr/bin/python3'
// };


var path = require("path")
// const dialog = require("dialogs")

var options = {
  // scriptPath : path.join(__dirname, '/../')
  // pythonPath : path.join(__dirname, "/python3.7.0/python.exe")
  pythonOptions: ['-u'],
}

// dialogs.alert('okidoki', function (ok) {
console.log('alert')
// })

function passForm(a){
  let {PythonShell} = require('python-shell')
  console.log(a)
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

