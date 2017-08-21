const helados = [
    'helado de vainilla',
    'helado de fesas',
    'helado de crema de chocolate',
    'helado de chocolate',
    'helado en cono',
    'helado de agua',
    'helado de crema',
    'helado de leche',
    'helado en pote',
    'helado'
];
//saco el primero elemento del array
let primerHelado = helados.shift();

//saco el ultimo elemento del array
let ultimoHelado = helados.pop();

//lo meto al principio del array
helados.unshift(ultimoHelado);

//lo meto al final del array
helados.push(primerHelado);

//eliminados los dos primeros gustos
let primero = helados.shift();
let segundo = helados.shift();

//eliminados los dos primeros gustos de helados
let ultimo = helados.pop();
let penultimo = helados.pop();

//nuevo array sin stock de gustos
const nuevosGustos = [];
//los agrego la pricipio del array
nuevosGustos.unshift(primero, segundo);

//los agrego al ultimo del array
nuevosGustos.push(ultimo, penultimo);

console.log(helados.join('\n'));
console.log('##################### nuevos gustos sin stock #######################');
console.log(nuevosGustos.join('\n'));