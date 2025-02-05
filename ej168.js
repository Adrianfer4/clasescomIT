//El resultado que nos da es que las variables numero1 y numero2 no estan definidas ya que se encuentran en scope de bloque local y no se puede acceder a ellas fuera del bloque if.
function test() {
    if (true) {
      let numero1 = 5;
      const numero2 = 10;
    }
    console.log(numero1);
    console.log(numero2);
  }
  
  test();