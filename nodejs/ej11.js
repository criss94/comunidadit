const express = require('express')
const path = require('path')
const app = express()

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', function(request, response) {
    response.sendFile(path.join(__dirname, 'productos.html'))
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})