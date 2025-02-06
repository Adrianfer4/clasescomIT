function esPar(num){
    return num % 2 == 0;
}
function validarEsPar(num){
    if(esPar(num)){
        console.log(`${num} es par`);
    }else{
        console.log(`${num} no es par`);
    }
}


validarEsPar(2);
validarEsPar(5);
validarEsPar(3);
validarEsPar(24);
validarEsPar(12);