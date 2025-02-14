const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function forEach(valor, callback){
    for(let i = 0; i < valor.length; i++){
        callback(valor[i], i);
    }
}
forEach(numeros, function(valor, indice){
    console.log(indice, valor);
});
