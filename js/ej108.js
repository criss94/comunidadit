
function ordenarNúmeros(numero1, numero2, numero3, descendente){
    //verifico el valor booleano si es verdadero
    if(descendente){
        //ordeno de mayor a menor
        if(numero1 > numero2 && numero2 > numero3 && numero3 < numero1){
            return `${numero1} ${numero2} ${numero3} primer if`;
        }else if(numero2 > numero3 && numero3 < numero1 && numero1 < numero2){
            return `${numero2} ${numero1} ${numero3} segundo if`;        
        }else if(numero3 > numero2 && numero2 > numero1 && numero1 < numero3){
            return `${numero3} ${numero2} ${numero1} tercer if`;
        }else if(numero2 < numero3 && numero3 < numero1 && numero1 > numero2){
            return `${numero1} ${numero3} ${numero2} cuarto if`;            
        }else if(numero2 < numero3 && numero3 > numero1 && numero1 > numero2){
            return `${numero3} ${numero1} ${numero2} quinto if`;
        }else if(numero2 > numero3 && numero3 > numero1 && numero1 < numero3){
            return `${numero2} ${numero3} ${numero1} sexto if`;            
        }

    }else{
        //ordeno de menor a mayor
        if(numero1 < numero2 && numero2 < numero3 && numero3 > numero1){
            return `${numero1} ${numero2} ${numero3} primer if`;
        }else if(numero2 < numero3 && numero3 > numero1 && numero1 > numero2){
            return `${numero2} ${numero1} ${numero3} segundo if`;        
        }else if(numero3 < numero2 && numero2 < numero1 && numero1 > numero3){
            return `${numero3} ${numero2} ${numero1} tercer if`;
        }else if(numero2 > numero3 && numero3 > numero1 && numero1 < numero2){
            return `${numero1} ${numero3} ${numero2} cuarto if`;
        }else if(numero2 > numero3 && numero3 < numero1 && numero1 < numero2){
            return `${numero3} ${numero1} ${numero2} quinto if`;
        }else if(numero2 < numero3 && numero3 < numero1 && numero1 > numero3){
            return `${numero2} ${numero3} ${numero1} sexto if`;
        }
    }
   
}
console.log(ordenarNúmeros(1000, 80, 200, true));