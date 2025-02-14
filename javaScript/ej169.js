//En este caso si se mostrara el mensaje porque la funcion mostrarMensaje se encuentra dentro de la funcion que contiene la variable nombre 
function obtenerFuncion() {
    const nombre = "JavaScript";
  
    function mostrarMensaje() {
      console.log("Yo <3 " + nombre);
    }
  
    mostrarMensaje();
  }
  
  obtenerFuncion();