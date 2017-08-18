let numero = 0;

do{
    let texto = '';
    let contador = 0;

    do{
        texto += '*';
        contador++;
    } while(contador < numero)
    
    if(numero % 2 != 0){
        console.log(texto);
    }
    numero++;
} while (numero < 15)