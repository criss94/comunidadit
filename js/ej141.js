const gatosDeViaje = [500,200,150];
//sumar valores con map

const total = gatosDeViaje.reduce(function(total, pesos){
    return total + pesos;
});

console.log('el total ha gastar es: ' + total);