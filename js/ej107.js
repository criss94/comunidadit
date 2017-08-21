
function numeroMasGrande(numero1, numero2){
    if(numero1 === numero2){
        //console.log(typeof numero1);
        return `Los dos números son ${numero1};`
    }else if(isNaN(numero1) || isNaN(numero2)){
        //console.log(isNaN(numero1)); true
        //console.log(Number.isNaN(numero1)); false
        return 'Esta función espera valores del tipo number';
    }else{
        return `El número ${numero1} es más grande que ${numero2}`;
    }
}
console.log(numeroMasGrande('cisni', 100));