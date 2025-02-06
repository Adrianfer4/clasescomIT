function autenticarUsuario(usuario, password){
    return (usuario === "nacho" && password === "Nerd1979") ||
        (usuario === "pedro" && password === "Batman0217") ||
        (usuario === "marta" && password === "Madre2312");
}

function probarAutenticacion(usuario, password) {
    if (autenticarUsuario(usuario, password)) {
        console.log(`Bienvenido ${usuario}, te estábamos esperando`);
    } else {
        console.log("Por favor ingrese credenciales válidas");
    }
}
probarAutenticacion("nacho", "Nerd1979");
probarAutenticacion("pedro", "Batman0217");
probarAutenticacion("marta", "Madre2312"); 
probarAutenticacion("juan", "12345"); 
probarAutenticacion("nacho", "incorrecto");