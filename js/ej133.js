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

//transformo el array en string
console.log(mutantes.toString());

//los buscamos por su index
if(mutantes.indexOf('Lorna Sally Dane') > -1){
    return;
}else{
    console.log('Lorna Sally Dane');
}