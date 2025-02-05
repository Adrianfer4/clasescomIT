function crearMultiplicador(numero1) {
    return function (numero2) {
      return numero1 * numero2;
    };
};
const mult = crearMultiplicador(3);
const resultado = mult(5);
console.log(resultado);