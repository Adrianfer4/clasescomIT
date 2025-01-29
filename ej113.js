function obtenerPerimetroRectangulo(base, altura){
    let perimetro;
    if(base === altura){
        perimetro = 4 * base;
    }else{
        perimetro = 2 * (altura + base);
    }
    return perimetro;
}

function probarPerimetro(base, altura){
    const perimetro = obtenerPerimetroRectangulo(base, altura);
    console.log(`El perimetro es ${perimetro}`);
    if(perimetro > 100){
        console.log("El perimetro es muy grande");
    }else{
        console.log("El perimetro no es muy grande");
    }
}

probarPerimetro(10, 10);
probarPerimetro(20, 30);
probarPerimetro(50, 50);
probarPerimetro(40, 30);