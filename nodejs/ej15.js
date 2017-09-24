const express = require('express')
const path = require('path')
const app = express()

var requestTime = function (req, res, next) {
    const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
    console.log(mensaje)
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Este request/response está OK'
    })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})