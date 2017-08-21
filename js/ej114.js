function invertir(texto) {
    let textoInvertido = "";
    
    for(let x = texto.length; x >= 0; x--){
        textoInvertido = textoInvertido + texto.charAt(x);
    }

    return textoInvertido;
  }

  console.log(invertir('hola a todos!!!'));