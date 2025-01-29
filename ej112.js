function mostrarNumeros(inicio, fin){
    if(typeof inicio !== "number" || typeof fin !== "number"){
        console.log("Los parametros deben ser de tipo number");
        return;
    }
    if(inicio === fin){
        console.log(`Los dos numeros son ${inicio}`);
    }else if(inicio < fin){
        for(let numero = inicio; numero <= fin; numero++){
            console.log(numero);
        }
    }else{
        for(let numero = inicio; numero >= fin; numero--){
            console.log(numero);
        }
    }
}
mostrarNumeros(0, 1000);
mostrarNumeros(1000, 0);
mostrarNumeros(100, 100);
mostrarNumeros("100", 300);