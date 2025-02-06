function calcularPromedio(...numeros){
    if(numeros.length === 0){
        return 0;
    }
    let suma= 0;
    for(let i = 0; i <= numeros.length - 1; i++){
        suma += numeros[i];
    }
    return suma / numeros.length;
}
console.log(calcularPromedio(10, 20, 30));
console.log(calcularPromedio(5, 15, 25, 35, 45));
console.log(calcularPromedio(100, 200));
console.log(calcularPromedio());