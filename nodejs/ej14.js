const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Este request/response está OK')
})

app.get('/products', (req, res) => {
    res.status(500).send( 'Ha ocurrido un error de servidor')
})

app.get('/contact', (req, res) => {
    res.status(404).send('404 No encontrado')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})