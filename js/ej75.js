let numero = 0;
let firstNum = -1;
let lastNum = 1;

while (numero < 11) {
    numero = firstNum + lastNum;
    firstNum = lastNum;
    lastNum = numero;

    console.log(numero);
}