function obtenerPerimetroRectangulo(base, altura){
    let perimetro = 0;

    if(base == altura){
        perimetro = base * altura;
    }else if(base != altura){
        perimetro = (2*base) + (2*altura);        
    }
    
    console.log(`El perímetro es ${perimetro}`);  
    return perimetro;
}
//verificamos si es o no mayor
if(obtenerPerimetroRectangulo(40,80) > 100){
    console.log('El perímetro es muy grande');
}else{
    console.log('Este perímetro no es muy grande');    
}