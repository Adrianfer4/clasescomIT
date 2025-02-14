function mostrarNumeros(numero){
    console.log(numero);
    if(numero < 10){
    mostrarNumeros(numero + 1);
    }
}
mostrarNumeros(4);