function ordenarNumeros(numero1, numero2, numero3, descendente){
    let numeros = [numero1, numero2, numero3];
    if(descendente){
        numeros.sort((a, b) => b - a);
        console.log(numeros);
    }else{
        numeros.sort((a, b) => a - b);
        console.log(numeros);
    }
    
}
ordenarNumeros(10, 8, 25, true);