const usuario = {
    username: null,
    password: null,
    saludar: function(){ (this.username != null) ? console.log(`Hola, soy el usuario ${username}`) : console.log('Este usuario no tiene username') },
    updatePassword: function(usuario){ this.password = usuario },
    updaterUsername: function(usuario){ this.username = usuario }
}

usuario.saludar();
console.log(usuario.username);
console.log(usuario.password);