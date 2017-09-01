let zona = 1;
let localidadFiltrada;

const juegos = [
    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Lego Marvel Super Heroes',
        precio: 700,
        cantidadVendida: 48,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Gta V Ps4 Físico',
        precio: 1449,
        cantidadVendida: 82,
        localidad: 'Santa Fe',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo',
        precio: 1190,
        cantidadVendida: 348,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado',
        precio: 1250,
        cantidadVendida: 445,
        localidad: 'Buenos Aires',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!',
        precio: 890,
        cantidadVendida: 182,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4',
        precio: 950,
        cantidadVendida: 517,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!',
        precio: 940,
        cantidadVendida: 275,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Need For Speed Ps4 Físico Nuevo Sellado Playstation Alclick',
        precio: 790,
        cantidadVendida: 89,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Lego Batman',
        precio: 1000,
        cantidadVendida: 39,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Fifa 17 Ps4 Original Fisico 2017',
        precio: 1290,
        cantidadVendida: 310,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Resident Evil 7 Ps4 Biohazard Físico',
        precio: 1390,
        cantidadVendida: 154,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    },
    {
        nombre: 'Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick',
        precio: 1390,
        cantidadVendida: 241,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    }
];

zona = 32;
/*switch (zona) {
    case 1:
        localidadFiltrada = 'Capital Federal';
        juegos.filter(function(juego) {
            if(juego.localidad === 'Capital Federal'){
                juego.imprimirEnPantalla();
                console.log('\n');
            }
        });
        break;
    case 2:
        localidadFiltrada = 'Santa Fe';
        juegos.filter(function(juego) {
            if(juego.localidad === 'Santa Fe'){
                juego.imprimirEnPantalla();
                console.log('\n');
            }
        });
        break;
    case 3:
        localidadFiltrada = 'Buenos Aires';
        juegos.filter(function(juego) {
            if(juego.localidad === 'Buenos Aires'){
                juego.imprimirEnPantalla();
                console.log('\n');
            }
        });
        break;
    default:
        localidadFiltrada = 'Capital Federal';
        juegos.filter(function(juego) {
            if(juego.localidad === 'Capital Federal'){
                juego.imprimirEnPantalla();
                console.log('\n');
            }
        });
        break;
}*/

function ordenarPorPrecio(){
    let savePrecio = [];
    juegos.forEach(function(precio){
        //let pre = precio.precio;
        //let precioOrdenado = pre.sort();
        //precioOrdenado.imprimirEnPantalla();
        //console.log(precio.imprimirEnPantalla());

        let arrayDePrecios = savePrecio.push(precio.precio);
        //let savePrecio2 = savePrecio.sort();
        //precio.imprimirEnPantalla();
        //console.log(arrayNumerico);
    });
}

ordenarPorPrecio();