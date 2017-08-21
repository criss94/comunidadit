
const fibonacci = function(){
    let n1 = 0;
    let n2 = 1;
    let n3;
    let contador = 0;

    for(var i = 0; i <= 50;i++){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        if(contador == 10){
            break;
        }
        contador++;
        console.log(n3);
    }

}
fibonacci();