let numero = 0;
let firstNum = -1;
let lastNum = 1;

do{
    numero = firstNum + lastNum;
    firstNum = lastNum;
    lastNum = numero;
    console.log(numero);
} while (numero < 11)
