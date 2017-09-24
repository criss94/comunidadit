const express = require('express')
const numeros = require('./numeros')
const Logger = require('logplease')
const logger = Logger.create('utils')

if(numeros(2, 3, 101, 201, 202, 100)){
    logger.info(`El número es par`);
}else{
    logger.error(`El número no es par`);
}
