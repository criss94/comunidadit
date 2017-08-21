
function esPar(numero){
    if(numero % 2 == 0){
        return `${numero} es par`;
    }else{
        return `${numero} no es par`;
    }
}
console.log(esPar(12));