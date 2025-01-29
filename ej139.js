const numeros = [];
for(let i = 0; i <= 100; i++){
    numeros.push(i);
}
const numerosFiltradosPares = numeros.filter(function(numerosPares, indice){
    return numerosPares % 2 === 0;
});
const numerosFiltradosImpares = numeros.filter(function(numerosImpares, indice){
    return numerosImpares % 2 !== 0;
});
console.log(`Numeros pares: ${numerosFiltradosPares.slice(-10)}`);
console.log(`Numeros impares: ${numerosFiltradosImpares.slice(-10)}`);
