let usuario = {
    nombre: "Nestor"
};
function isUserValid(nombreUsuario){
    if(nombreUsuario === "Nestor"){
        console.log("Exito");
    }else{
        console.log("error");
    }
}
isUserValid(usuario.nombre);