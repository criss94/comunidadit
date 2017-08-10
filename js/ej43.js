let texto = "game of thrones";
let primerLetra, segundaLetra, tercerLetra;
//primera letra
primerLetra = texto.charAt(0);
//5ta letra
segundaLetra = texto.charAt(4);
//caracter nro. 8
tercerLetra = texto.charAt(7);
let resultado = primerLetra + segundaLetra + tercerLetra;
//el resto de los caracteres no se muestra por son los espacios
console.log(resultado.toUpperCase());