const express = require('express')
const path = require('path')
const routesHome = require('./routes')
const routesProducts = require('./routes')
const app = express()

app.use('/', routesHome)
app.use('/products', routesProducts)

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})