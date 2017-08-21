
function autenticarUsuario(usu, pass){
    if(usu == 'nacho' && pass == 'Nerd1979' ||
       usu == 'pedro' && pass == 'Batman0217' ||
       usu == 'marta' && pass == 'Madre2312'){
        return `Bienvenido ${usu}, te estabamos esperando`;
    }else{
        return 'Por favor ingrese credenciales válidas';
    }
}
console.log(autenticarUsuario('criss','developerNodeJS'));