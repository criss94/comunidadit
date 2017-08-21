function elMasGrande(nombre) {
    let msg = '';
    if(nombre == 'Roman'){
        msg = 'El mejor de la historia es Román';
        return msg.toUpperCase();
    }else{
        msg = 'POR FAVOR INGRESE EL NOMBRE DE UN GRAN JUGADOR';
        return msg.toLowerCase();        
    }
}

console.log(elMasGrande('Roman'));