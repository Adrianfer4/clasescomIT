let suma = 0;
for(let i = 0; i <= 1000; i++){
    suma = suma + i;
    if(suma > 100){
        break;
    }
}
console.log(`La suma es ${suma}`);