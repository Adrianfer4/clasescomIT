const aritmetica = {
    suma: function(num1, num2){
        if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
        }else{
            console.log("ERROR, el valor ingresado no es un numero");
        }
    },
    resta: function(num1, num2){
        if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(`La resta de ${num1} - ${num2} es: ${num1 - num2}`);
        }else{
            console.log("ERROR, el valor ingresado no es un numero");
        }
    },
    multiplicar: function(num1, num2){
        if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(`La multiplicacion de ${num1} x ${num2} es: ${num1 * num2}`);
        }else{
            console.log("ERROR, el valor ingresado no es un numero");
        }
    },
    dividir: function(num1, num2){
        if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(`La division de ${num1} / ${num2} es: ${num1 / num2}`);
        }else{
            console.log("ERROR, el valor ingresado no es un numero");
        }
    },
    mostrarModulo: function(num1, num2){
        if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(`El modulo de ${num1} % ${num2} es: ${num1 % num2}`);
        }else{
            console.log("ERROR, el valor ingresado no es un numero");
        }
    }
};
aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);