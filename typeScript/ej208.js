function sumarNumeros(inicio, fin) {
    var resultado = 0;
    for (var i = inicio; i <= fin; i++) {
        resultado += i;
    }
    return "El resultado final de los numeros entre ".concat(inicio, " y ").concat(fin, " es ").concat(resultado);
}
console.log(sumarNumeros(0, 10));
console.log(sumarNumeros(20, 30));
console.log(sumarNumeros(5, 50));
