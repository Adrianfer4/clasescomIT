const numeros = [];
for(let i = 0; i <= 100; i++){
    numeros.push(i);
}
const numerosDe10 = numeros.map(function(valor){
    return valor * 10;
});
for (let i = 0; i <= 10; i++) {
    console.log(`Índice: ${i}, Valor Original: ${numeros[i]}, Valor Incrementado: ${numerosDe10[i]}`);
}