//array de objetos
const juegos = [
    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal',
        imprimirEnPantalla:  function(){
            console.log(`${this.nombre}`);
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
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
            console.log(`$ ${this.precio}`);
            console.log(`${this.cantidadVendida}`);
            console.log(`${this.localidad}`);
        }
    }
];

//funcion que ordena los precios de los juegos de menor a mayor y viceversa
function ordenarPorPrecio(opcion){

    let guardarPrecio = [];
    //recorro los juegos para extraer solo precios de cada juego
    juegos.forEach(function(precios){
        //los almaceno en el array creado antes
        guardarPrecio.push(precios['precio']);
    });
    
    //verifico si el parametro q me pasaron es 'ASC', entonces ordno solo los precios de menor a mayor
    if(opcion.toLowerCase() === 'asc'){
        //lo almaceno en su misma variable ascendentemente
        guardarPrecio = guardarPrecio.sort(function(a, b){
            return a - b;
        });
        //recorro los precios ya ordenados de menor a mayor
        for(let x = 0; x < guardarPrecio.length; x++){
            //tambien recorro los juegos
            juegos.forEach(function(j){
                //y comparo solo los precios, y me imprime si se cumple dicha condicion
                if(guardarPrecio[x] === j['precio']){
                    //imprimo si son iguales
                    j['imprimirEnPantalla']();
                    console.log('\n');
                }  
            });
        }  
    }else if(opcion.toLowerCase() === 'desc'){
        //lo almaceno en su misma variable ascendentemente
        guardarPrecio = guardarPrecio.sort(function(a, b){
            return b - a;
        });
        //recorro los precios ya ordenados de mayor a menor
        for(let x = 0; x < guardarPrecio.length; x++){
            //tambien recorro los juegos
            juegos.forEach(function(j){
                //y comparo solo los precios, y me imprime si se cumple dicha condicion
                if(guardarPrecio[x] === j['precio']){
                    //imprimo si son iguales
                    j['imprimirEnPantalla']();
                    console.log('\n');
                }  
            });
        }  
    }else if(opcion){
        //almaceno los precios de mayor a menor
        guardarPrecio = guardarPrecio.sort(function(a, b){
            return b - a;
        });
        //recorro los precios ya ordenados de mayor a menor
        for(let x = 0; x < guardarPrecio.length; x++){
            //tambien recorro los juegos
            juegos.filter(function(juego) {
                //le pregunto si el precio ordenado es igual al precio filtrado continue
                if(guardarPrecio[x] === juego.precio){
                    //y si el juego filtrado con localidad 'X' es igual al parametro pasado x el user
                    if(juego.localidad === opcion){
                        //imprimo solo a esos que cumplen con las 2 condiciones
                        juego.imprimirEnPantalla();
                        console.log('\n');
                    }
                }
            });
        }

    }else{
        console.log('Elija de que forma quiere ver los productos: "asc" ó "desc"');
    }

}

// Capital Federal
ordenarPorPrecio('asc');