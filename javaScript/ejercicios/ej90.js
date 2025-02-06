let suma = 0;
for(let i = 0; i <= 1000; i++){
    if(i % 2 !== 0){
        suma += i;
    }else{ 
        continue;
    }
    console.log(`La suma hasta ${i} es: ${suma}`);
}


