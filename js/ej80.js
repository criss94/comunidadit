let numero = 0;
let sumaTotal = 0;

do{
    if(numero % 2 != 0){
        sumaTotal += numero;
    }
    numero++;
} while (numero <= 1000)

console.log('La suma parcial de todos los impares es: ' + sumaTotal);