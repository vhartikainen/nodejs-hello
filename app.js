var express = require('express')
var app = express()
var port=process.env.port || 3000;

app.get('/', function (req, res) {
  console.log("test")
  res.send('Hello Timo and Pekka!')
})

app.listen(port, function () {
  console.log('Example app listening on port '+port+"!")
})
