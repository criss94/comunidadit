const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

const productosApi = [
    'MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 
    'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra',
    'iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories',
    'iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE'
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', (req, res) => {
    const response = { products: productosApi}
    res.json(response)
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})