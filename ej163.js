function saludar(mensaje, despedida){
    console.log(mensaje);
    despedida();
}
saludar("Bienvenido a javaScript", function(){
    console.log("Continuara....");
});