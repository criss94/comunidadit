let sumaTotal = 0;

for(let x=0; x <= 1000; x++){
    if(x % 2 != 0){
        sumaTotal += x;
    }
}

console.log('La suma parcial de todos los impares es: ' + sumaTotal);