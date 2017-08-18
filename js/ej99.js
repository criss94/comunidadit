let suma = 0;
let cont = 0;

for(let x = 1; x <= 100; x++){
    if(x % 2 == 0){
        suma += x;
        cont++;
        if(cont == 11){
            break;
        }
        console.log(suma);
    }
}