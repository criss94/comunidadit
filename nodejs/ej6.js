function saludar(nombre, apellido, cb) {
    console.log(`Hola ${nombre} ${apellido}`)
}

function luego(){
    console.log('Luego de saludar se ejecuta el callback')
}

saludar('criss','veizaga', luego())
