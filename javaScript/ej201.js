//This en una funcion normal depende de como se llama la funcion, en global en el browser es windows mientras que en node es global.
//call y apply ejecutan la funcion con un this especifico la diferencia es que call pasa los argumentos individualmente mientras apply pasa los argumentos en array, en cambio bind no ejecuta la funcion inmediatamente sino que devuelve una nueva funcion.

function saludar() {
    console.log(this);
  }
  
  saludar();