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
//de inicio a fin
console.log('################# de inicio a fin ###################');
for(let x = 0; x < helados.length; x++){
    console.log(helados[x]);
}
//de fin a inicio
console.log('################# de fin a inicio ###################');
for(let i = helados.length-1; i > 0; i--){
    console.log(helados[i]);
}