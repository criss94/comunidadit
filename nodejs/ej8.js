const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Bienvenidos a Node.js Server Side')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('No se pudo levantar el servidor en el puerto', err)
  }

  console.log(`Servidor corriendo en el puerto ${port}`)
})