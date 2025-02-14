function obtenerIDUsuario(){
    return 50;
}

function usuarioValido(){
    if(obtenerIDUsuario() > 30){
        return false;
    }else{
        return true;
    }
}

if(usuarioValido()){
    console.log("El usuario es valido");
}else{
    console.log("El usuario no es valido");
}

