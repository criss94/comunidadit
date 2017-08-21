
function obtenerIDUsuario(){
    return 5;
}

function usuarioValido(){
    let valido;
    if(obtenerIDUsuario() > 30){
        valido = false;
        return valido;    
    }else{
        valido = true;
        return valido;
    }
}

console.log(usuarioValido());