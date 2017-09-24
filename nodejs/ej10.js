const express = require('express')
const app = express()

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/productos', function(request, response) {
    response.send('listado de productos')
})

app.post('/productos', function(request, response) {
    response.send('crear un producto')
})

app.put('/productos', function(request, response) {
    response.send('actualizar un producto')
})

app.delete('/productos', function(request, response) {
    response.send('borrar un producto')
})

app.get('/usuarios', function(request, response) {
    response.send('listado de usuarios')
})

app.post('/usuarios', function(request, response) {
    response.send('crear un usuarios')
})

app.put('/usuarios', function(request, response) {
    response.send('actualizar un usuarios')
})

app.delete('/usuarios', function(request, response) {
    response.send('borrar un usuarios')
})

app.all('/all', function(request, response) {
    response.send('soy un metodo con todos los verbos http')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})