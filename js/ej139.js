const numeros = [];
const numerosPares = [];
const numerosImpares = [];

for(let i = 1; i <= 1000; i++){
    numeros[i] = i;
    //console.log(numeros[i]);
}

for(let i = 1; i <= 1000; i++){
    if(i % 2 == 0){
        numerosPares[i] = i;
        //console.log(numerosPares[i]);    
    }
}

for(let i = 1; i <= 1000; i++){
    if(i % 2 != 0){
        numerosImpares[i] = i;
        //console.log(numerosImpares[i]);            
    }
}

const ultimosPares = numerosPares.filter(function(numPar){
    return numPar > 980;
});

const ultimosImpares = numerosImpares.filter(function(numPar){
    return numPar > 980;
});

console.log(ultimosPares);
console.log(ultimosImpares);