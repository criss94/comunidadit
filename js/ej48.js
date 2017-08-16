let mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
let pi = mensaje.slice(0,4)
let significadoDeLaVida = mensaje.slice(38,41);
//los parseo a enteros
pi = parseFloat(pi);
significadoDeLaVida = parseInt(significadoDeLaVida);

let resultado = pi + significadoDeLaVida;

console.log(resultado);
console.log(resultado + ' es el resultado de sumar las variables ' + pi.toString() + ' y ' + significadoDeLaVida.toString());