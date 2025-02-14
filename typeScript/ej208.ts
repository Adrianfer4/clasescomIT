function sumarNumeros(inicio: number, fin: number){
    let resultado = 0;
    for(let i = inicio; i <= fin; i++){
        resultado += i;
    }
    return `El resultado final de los numeros entre ${inicio} y ${fin} es ${resultado}`;
}
console.log(sumarNumeros(0, 10));
console.log(sumarNumeros(20, 30));
console.log(sumarNumeros(5, 50));
export default {};