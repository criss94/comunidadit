const dia = 3;
let nombreDelDia = null;

switch (dia) {
    case 1:
        nombreDelDia = 'lunes';
        break;
    case 2:
        nombreDelDia = 'martes';
        break;
    case 3:
        nombreDelDia = 'miercoles';
        break;
    case 4:
        nombreDelDia = 'jueves';
        break;
    case 5:
        nombreDelDia = 'viernes';
        break;
    case 6:
        nombreDelDia = 'sabado';
        break;
    case 7:
        nombreDelDia = 'domingo';
        break;
    default:
        nombreDelDia = null;
        break;
}

(nombreDelDia != null) ? console.log(`El día seleccionado es: ${nombreDelDia}`) : console.log('Por favor seleccionar un número de 1 a 7');

//version if anidados
if (dia == 1) {
    nombreDelDia = 'lunes';
}else if (dia == 2){
    nombreDelDia = 'martes';
}else if (dia == 3){
    nombreDelDia = 'miercoles';
}else if (dia == 4){
    nombreDelDia = 'jueves';
}else if (dia == 5){
    nombreDelDia = 'viernes';
}else if (dia == 6){
    nombreDelDia = 'sabado';
}else if (dia == 7){
    nombreDelDia = 'domingo';
}else{
    nombreDelDia = null;
}

if(nombreDelDia != null) {
    console.log(`El día seleccionado es: ${nombreDelDia}`);
 }else{
     console.log('Por favor seleccionar un número de 1 a 7');
 }