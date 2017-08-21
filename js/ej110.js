
function promedio(nota1, nota2, nota3, nota4, nota5){
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)){
        return 'Porfavor ingrese solo numeros';
    }else{
        return (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    }
}
console.log(promedio(4,8,2,10,9));