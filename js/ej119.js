const datos = [42, true, function() {return 'El significado de la vida es: '}];

const boleano = datos[1];
const texto = datos[2];
const num = datos[0];

if(boleano){
    console.log(texto() + num);
}