const express = require('express')
const path = require('path')
const app = express()

app.get('/api/products', function(request, response) {
    response.json({
        descripcion: 'Productos',
        items: [
          { nombre: 'taza de Star Wars' , precio: 300},
          { nombre: 'FIFA 22 PS4' , precio: 1000},
          { nombre: 'Remera superheore' , precio: 100},
          { nombre: 'Bincha de Piñon fijo' , precio: 200},
          { nombre: 'Grande de Muzza' , precio: 120},
          { nombre: 'Botella de Fernet por 1 litro' , precio: 220}
        ]
    })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})