let suma = 0;

for(let x = 0; x <= 1000; x++){
    suma += x;
    if(suma > 100){
        console.log(suma);
        break;
    }
}