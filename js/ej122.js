const ingredientes = [
    'Carne de cerdo',
    'Tomate',
    'Pollo',
    'Lechuga',
    'Lomo',
    'Zanahoria',
    'Rúcula'
];

const vegetariano = [];
vegetariano[0] = ingredientes[1]
vegetariano[1] = ingredientes[3]
vegetariano[2] = ingredientes[5]
vegetariano[3] = ingredientes[6]

for(let x = 0; x < ingredientes.length; x++){
    console.log('Menu regular:',ingredientes[x]);
}

for(let x = 0; x < vegetariano.length; x++){
    console.log('Menu vegetariano:',vegetariano[x]);
}