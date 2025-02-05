const gastosViaje = [100, 1000, 200];
const suma = gastosViaje.reduce(function(a, b){
    return a + b;
}, 0);
console.log(`El gasto total del viaje va ser de ${suma} pesos.`);