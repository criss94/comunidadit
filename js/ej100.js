//mostrar los numeros pares del 0 al 100
function numerosPares(){
    for (let i = 0; i <= 100; i++) {
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
//lo invocamos
numerosPares();