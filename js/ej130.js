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

//preguntar como ordenar palabras o como se hace el ejercicio

//listado original del array
for(let x = 0; x < mutantes.length; x++){
    console.log(mutantes[x]);
}
//lista con * al inicio de cada elemento del array
console.log(mutantes.join(' * '));