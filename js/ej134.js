let numeros = [];
let sumaTotal = 0;
//lleno el array con numeros del 0 al 10000
for(let x = 0; x <= 10000; x++){
    numeros[x] = x;    
}
//recorro el array
for(let i = 0; i < numeros.length; i++){
    sumaTotal += i;
    console.log(i + ' : ' + sumaTotal);
}

console.log('El resultado final es: ' + sumaTotal);

if(sumaTotal == 50005000){
    console.log('El ejercicio es correcto');
}else{
    console.log('Verificar el ejercicio para obtener el resultado esperado!!!');    
}