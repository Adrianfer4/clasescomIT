let suma = 0;
let primeros10Pares = 0;
for(let i = 0; i < 10000; i++){
    if(i % 2 === 0){
        suma += i;
        primeros10Pares++;
    }
    if(primeros10Pares === 10){
        break;
    }
}
console.log(`El resultado de los numeros hasta el corte es ${suma}`);