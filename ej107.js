function numeroMasGrande(numero1, numero2){
    if(typeof numero1 !== "number" || typeof numero2 !== "number"){
        console.log("Esta funcion espera valores de tipo number");
    } else{
        if(numero1 > numero2){
            console.log(`El numero ${numero1} es mas grande que ${numero2}`);
        }else if(numero1 < numero2){
            console.log(`El numero ${numero2} es mas grande que ${numero1}`);
        }else{
            console.log(`Los dos numeros son ${numero1}`);
        }
    }
}
numeroMasGrande(3, 8);