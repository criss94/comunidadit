let numero = 0;

while (numero < 11) {
    let texto = '';
    let contador = 0;
    while(contador < numero){
        texto += '*';
        contador++;
    }
    numero++;
    console.log(texto);
}