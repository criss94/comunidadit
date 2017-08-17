const numeroDeMes = 1;
let nombreDelMes = null;
let cantidadDeDias = null;

switch (numeroDeMes) {
    case 1:
        nombreDelMes = 'enero';
        cantidadDeDias = 31;
        break;
    case 2:
        nombreDelMes = 'febrero';
        cantidadDeDias = 28/29;
        break;
    case 3:
        nombreDelMes = 'marzo';
        cantidadDeDias = 31;
        break;
    case 4:
        nombreDelMes = 'abril';
        cantidadDeDias = 30;
        break;
    case 5:
        nombreDelMes = 'mayo';
        cantidadDeDias = 31;
        break;
    case 6:
        nombreDelMes = 'junio';
        cantidadDeDias = 30;
        break;
    case 7:
        nombreDelMes = 'julio';
        cantidadDeDias = 31;
        break;
    case 3:
        nombreDelMes = 'agosto';
        cantidadDeDias = 31;
        break;
    case 4:
        nombreDelMes = 'septiembre';
        cantidadDeDias = 30;
        break;
    case 5:
        nombreDelMes = 'octubre';
        cantidadDeDias = 31;
        break;
    case 6:
        nombreDelMes = 'noviembre';
        cantidadDeDias = 30;
        break;
    case 7:
        nombreDelMes = 'diciembre';
        cantidadDeDias = 31;
        break;
    default:
        nombreDelMes = null;
        cantidadDeDias = null;
        break;
}

(nombreDelMes === null && cantidadDeDias === null)
 ? console.log('Ingrese un número entre 1 y 12')
 : console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);