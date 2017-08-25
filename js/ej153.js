const aritmetica = {
    suma: function(numero1, numero2){
        if(typeof numero1 === 'number' && typeof numero2 === 'number'){
            return numero1 + numero2;
        }
    },
    resta: function(numero1, numero2){
        if(typeof numero1 === 'number' && typeof numero2 === 'number'){
            return numero1 - numero2;
        }       
    },
    multiplicar: function(numero1, numero2){
        if(typeof numero1 === 'number' && typeof numero2 === 'number'){
            return numero1 * numero2;
        }     
    },
    dividir: function(numero1, numero2){
        if(typeof numero1 === 'number' && typeof numero2 === 'number'){
            return numero1 / numero2;
        }        
    },
    mostrarModulo: function(numero1, numero2){
        if(typeof numero1 === 'number' && typeof numero2 === 'number'){
            return numero1 % numero2;
        } 
    }
}

console.log(aritmetica.suma(2, 10));
console.log(aritmetica.resta(10, 5));
console.log(aritmetica.multiplicar(3, 100));
console.log(aritmetica.dividir(2, 10));
console.log(aritmetica.mostrarModulo(20, 2));