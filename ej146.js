const usuario = {
    userName: "batman",
    password: "Alfred1960KPO!"
};


function autenticarUsuario(nombreDeUsuario, clave){
    return nombreDeUsuario === "batman" && clave === "Alfred1960KPO!";
}
if(autenticarUsuario(usuario.userName, usuario.password)){
    console.log(usuario);
}else{
    console.log("Usuario no autenticado");
};
