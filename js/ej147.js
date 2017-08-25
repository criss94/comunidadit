const usuario = {
    username : 'batman',
    password : 'Alfred1960KPO!'
};

function autenticarUsuario(usuario){
    if(usuario === 'batman'){
        return true;
    }else{
        return false;
    }
}

if(autenticarUsuario('batman')){
    console.log(usuario.username);
    console.log(usuario.password);
}else{
    console.log('Usuario no autenticado');
}