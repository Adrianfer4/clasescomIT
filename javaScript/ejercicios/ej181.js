function crearMultiplicador(factor){
    return function(input){
        return input * factor;
    }
};
const doble = crearMultiplicador(2);
const resultado = doble(10);
console.log(resultado);

const triple = crearMultiplicador(3);
const resultado2 = triple(4);
console.log(resultado2);