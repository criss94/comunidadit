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

//nuevo array sin stock de gustos
const nuevosGustos = [];
nuevosGustos.unshift(primero, segundo);

console.log(helados.join('\n'));
console.log('##################### nuevos gustos sin stock #######################');
console.log(nuevosGustos.join('\n'));