const express = require('express')
const saludador = require('./saludador')

function luego(){
    console.log('Luego de saludar se ejecuta el callback')
}

saludador('criss','veizaga', luego())
