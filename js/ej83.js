let numero = 11;

do{
    let texto = '';
    let contador = 0;
    do{
        texto += '*';
        contador++;
    } while(contador < numero)
    numero--;
    console.log(texto);
} while (numero > 0)