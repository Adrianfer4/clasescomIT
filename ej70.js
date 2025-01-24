let numero = 0;
let suma = 0;
while(numero < 1000){
    numero++;
    if(numero % 2 !== 0){
        suma += numero;
    }else{ 
        continue;
    }
    console.log(`La suma hasta ${numero} es: ${suma}`);
}

