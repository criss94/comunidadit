let numero = 0;
let sumaTotal = 0;

do{
    let i = numero++;
    sumaTotal += i;
} while (numero <= 1000)

console.log('El total de la suma es: ' + sumaTotal);