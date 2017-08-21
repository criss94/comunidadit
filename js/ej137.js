const numeros = [];
const otroArray = [];

//lleno el array de numeros
for(let x = 0; x <= 1000; x++){
    numeros[x] = x;
    //console.log(numeros[x]);
}

let resultNum = numeros.map(function(num1){
    for(let i = 0; i <= num1; i+=10){
        otroArray[i] = i;
    }
});

//array normal
let contador1 = 0;
numeros.forEach(function(valor, indice){
    if(contador1 == 10){
        return;
    }
    console.log(`indice: ${indice} | valor: ${valor} | valor incrementado de los primeros 10: ${indice}`);
    contador1++;
});

console.log('########################################################################################');

//array de 10 en 10
let contador2 = 0;
otroArray.forEach(function(valor, indice){
    if(contador2 == 10){
        return;
    }
    console.log(`indice: ${indice} | valor: ${valor} | valor incrementado de los primeros 10: ${indice}`);
    contador2++;
});


//PREGUNTAR SOBRE ESTE PUNTO QUE NO QUEDO NUY EN CLARO