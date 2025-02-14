const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuevosNumeros = [];
function map(numeros, mult){
    for(let i = 0; i < numeros.length; i++){
        nuevosNumeros.push(mult(numeros[i]));
    }
    return nuevosNumeros;
}
const resultado = map(numeros, function(numero){
    return numero * 2;
})
console.log(resultado);