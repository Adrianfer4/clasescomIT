const numeros = [];
let suma = 0;
for(let i = 0; i <= 10000; i++){
    numeros.push(i);
    suma += numeros[i];
    console.log(`Resultado parcial ${suma}`);
}
console.log(`Resultado final ${suma}`);
if(suma === 50005000){
    console.log("El resultado es correcto");
}else{
    console.log("Verificar el ejercicio para obtener el resultado esperado!!!");
}