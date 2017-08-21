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
//hago una copia del array mutantes
const copiaMutantes = mutantes.map(function(mutante){
    return mutante;
});
//reemplazo esos indices con mis mutantes preferidos
copiaMutantes[0] = 'Goku';
copiaMutantes[9] = 'Naruto';
copiaMutantes[3] = 'Boruto';

//original
console.log('############################### ORIGINAL ############################');
mutantes.forEach(function(mutante){
    console.log(mutante);
});

//modificado
console.log('############################### MODIFICADO ##############################');
copiaMutantes.forEach(function(mutante){
    console.log(mutante);
});