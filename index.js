const express = require('express'),
      app = express(),
      path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.resolve('index.html'))
})

app.listen(3000)
