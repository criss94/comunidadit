
function mostrarNumeros(inicio, fin){
    if(parseInt(inicio) < parseInt(fin)){
        for(let x = inicio; x <= fin; x++){
            console.log(x);
        }
    }else if(parseInt(inicio) > parseInt(fin)){
        for(let x = inicio; x >= fin; x--){
            console.log(x);
        }
    }else if(parseInt(inicio) == parseInt(fin)){
        console.log('Los numeros son iguales');
    }
}
mostrarNumeros("40", 40);