//En este ejercicio nos dara un error porque queremos imprimir algo que aun no esta declarado primero deberiamos declarar la variable para poder mostrar el valor.
function mostrarValor() {
    console.log(valor);
    let valor = 5;
  }
  mostrarValor();