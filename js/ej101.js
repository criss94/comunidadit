
function misDatos(){
    let nombre,edad,telefono,calle,altura,codigoPostal,casado;
    nombre = 'criss';
    edad = 23;
    telefono = 115151515;
    calle = 'rivadavia';
    altura = 4000;
    codigoPostal = 1836;
    casado = false;
    return ` nombre: ${nombre} \n edad: ${edad} \n telefono: ${telefono} \n calle: ${calle} \n altura: ${altura} \n codigo postal: ${codigoPostal} \n casado:  ${casado}`;
}

function misDatos1(nombre,edad,telefono,calle,altura,codigoPostal,casado){
    return ` nombre: ${nombre} \n edad: ${edad} \n telefono: ${telefono} \n calle: ${calle} \n altura: ${altura} \n codigo postal: ${codigoPostal} \n casado:  ${casado}`;
}
//lo invocamos
console.log(misDatos());
console.log(misDatos1('criss',23,115151515,'rivadavia',4000,1836,false));