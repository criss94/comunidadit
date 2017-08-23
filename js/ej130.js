const mutantes = [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe'
];

//ordeno el array ordenadamente
const ordenado = mutantes.sort();

//revierto el order de la lista
const revertido = mutantes.reverse();

//listado original del array
for(let x = 0; x < mutantes.length; x++){
    console.log(mutantes[x]);
}
//lista ordenada de mutantes
console.log(ordenado);

//lista revertida de mutantes
console.log(revertido);

//lista con * al inicio de cada elemento del array
console.log(mutantes.join(' * '));