const mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
const pi = parseFloat(mensaje.substring(0, 4));
const significadoVida = parseInt(mensaje.substring(38, 40));
const resultado = pi + significadoVida;
console.log(resultado);
console.log(resultado.toString() + ' es el resultado de sumar las variables pi y significadoDeLaVida concatenando los valores.');