let numero = 0;

while (numero < 15) {
    let texto = '';
    let contador = 0;
    while(contador < numero){
        texto += '*';
        contador++;
    }
    if(numero % 2 != 0){
        console.log(texto);
    }
    numero++;
}