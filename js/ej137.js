const numeros = [];

//lleno el array de numeros
for(let x = 0; x <= 1000; x++){
    numeros[x] = x;
    //console.log(numeros[x]);
}

let nuevoArray = numeros.map(function(num1){
    return num1 + 10;
});

//array normal
let contador1 = 0;
numeros.forEach(function(valor, indice){
    if(contador1 == 10){
        return;
    }
    console.log(`indice: ${indice} | valor: ${valor} | valor incrementado de los primeros 10: ${valor}`);
    contador1++;
});

console.log('############################### array de 10 en 10 #####################################');

//array de 10 en 10
let contador2 = 0;
nuevoArray.forEach(function(valor, indice){
    if(contador2 == 10){
        return;
    }
    console.log(`indice: ${indice} | valor: ${numeros[indice]} | valor incrementado: ${valor}`);
    contador2++;
});