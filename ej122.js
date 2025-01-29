const ingredientes = [
    "Carne de cerdo",
    "Tomate",
    "Pollo",
    "Lechuga",
    "Lomo",
    "Zanahoria",
    "Rúcula"
];
const vegetariano = [
    ingredientes[1], 
    ingredientes[3], 
    ingredientes[5], 
    ingredientes[6]];
    
console.log("----Menu regular-----");
ingredientes.forEach((valor, indice) => {
    console.log(indice, valor);
});
console.log("----Menu vegetariano---");
vegetariano.forEach((valor, indice) => {
    console.log(indice, valor);
});