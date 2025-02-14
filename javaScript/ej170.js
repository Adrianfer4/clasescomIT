//El resultado sera el incremento del contador hasta el numero 4 porque la variable contador retorna la funcion donde se utiliza la esa variable y esta dentro del scope local, luego se crea una variable global con el nombre incrementar que llamara a la funcion contar y como es una variable global el scope permite llamar dicha funcion.
function contar() {
    let contador = 0;
    return function () {
      contador++;
      console.log(contador);
    };
  }
  
  const incrementar = contar();
  incrementar();
  incrementar();
  incrementar();
  incrementar();