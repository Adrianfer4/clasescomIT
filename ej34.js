let ingresos = 1000;
let ganancias = 600; 
let impuestos = 500;

ingresos = ingresos >= 800;
impuestos = ingresos <= 400;
ganancias = ganancias == 600;

console.log(`Objetivos de ingresos: ${ingresos}`);
console.log(`Objetivos de impuestos: ${impuestos}`);
console.log(`Objetivos de ganancias: ${ganancias}`);