const usuario = {
    userName: null,
    password: null,
    saludar: function(){
        if(this.userName){
            console.log(`Hola, soy el usuario ${this.userName}`);
        }else{
            console.log("Este usuario no tiene username");
        }
    },
    updatePassword: function(nuevaPassword){
        this.password = nuevaPassword;
    },
    updateUserName: function(nombreUsuario){
         this.userName = nombreUsuario;
    }
};
usuario.updateUserName("Nestor");
usuario.updatePassword("1234");
usuario.saludar();
console.log(`El password del usuario es : ${usuario.password}`);
