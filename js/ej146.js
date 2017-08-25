const usuario = {
    username : 'batman',
    password : 'Alfred1960KPO!'
};

function autenticarUsuario(nombreDeUsuario, clave){
    if(nombreDeUsuario === 'batman' && clave === 'Alfred1960KPO!'){
        return true;
    }else{
        return false;
    }
}

if(autenticarUsuario('batman', 'Alfred1960KPO!')){
    console.log(usuario.username);
    console.log(usuario.password);
}else{
    console.log('Usuario no autenticado');
}