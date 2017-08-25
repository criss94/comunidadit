
function agregarHelados(coleccion, gusto){
    return coleccion.push(gusto);
}

const helados = [];
agregarHelados(helados, 'helado');
agregarHelados(helados, 'helado de fesas');
agregarHelados(helados, 'helado de crema de chocolate');
agregarHelados(helados, 'helado de chocolate');
agregarHelados(helados, 'helado en cono');
agregarHelados(helados, 'helado de agua');
agregarHelados(helados, 'helado de crema');
agregarHelados(helados, 'helado de leche');
agregarHelados(helados, 'helado en pote');
agregarHelados(helados, 'helado de vainilla');
console.log(helados);