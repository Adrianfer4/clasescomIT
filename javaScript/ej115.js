function esElMasGrande(nombre){
    if(nombre === "Roman"){
        let enMayusculas = "El mejor de la historia es Román";
        console.log(enMayusculas.toUpperCase());
    }else{
        enMayusculas = "Por favor ingrese el nombre de un gran jugador";
        console.log(enMayusculas.toLowerCase());
    }
}
esElMasGrande("Roman");
esElMasGrande("Nestor");