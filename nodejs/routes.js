const express = require('express')
const routerHome = express.Router()
const routerProduct = express.Router()

routerHome.get('/', function(req, res) {
  res.send('Usamos el método GET del home')
})

routerHome.post('/', function(req, res) {
  res.send('Usamos el método POST del home')
})

routerProduct.get('/', function(req, res) {
  res.send('Usamos el método GET de los productos')
})

routerProduct.post('/', function(req, res) {
  res.send('Usamos el método POST de los productos')
})

routerProduct.put('/', function(req, res) {
  res.send('Usamos el método put de los productos')
})

routerProduct.delete('/', function(req, res) {
  res.send('Usamos el método delete de los productos')
})

module.exports = {
  routerHome,
  routerProduct
}