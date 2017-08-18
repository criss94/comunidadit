let numero = 11;

while (numero >= 0) {
    let texto = '';
    let contador = 0;
    while(contador < numero){
        texto += '*';
        contador++;
    }
    numero--;
    console.log(texto);
}