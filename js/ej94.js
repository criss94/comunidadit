
for(let x = 0; x < 15; x++){
    let texto = '';
    for(let contador = 0; contador < x; contador++){
        texto += '*';
    }
    if(x % 2 != 0){
        console.log(texto);
    }
}