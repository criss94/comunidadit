const usuario = {
    username : 'batman',
    password : 'Alfred1960KPO!'
};

console.log(usuario);
if(usuario.username == 'batman' && usuario.password == 'Alfred1960KPO!'){
    console.log(usuario.username);
    console.log(usuario.password);
}else{
    console.log('Usuario no autenticado');
}