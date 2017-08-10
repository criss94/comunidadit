let ingresos, ganancias, impuestos, resultado;

let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;

//genero $800 mas de ingreso
ingresos += 800;
//gastar menos de $400
impuestos -= 300;
//pagar bono si se pagan justo $600
ganancias += 200;
console.log(ingresos >= 800);
console.log(impuestos < 400);
console.log(ganancias == 600);