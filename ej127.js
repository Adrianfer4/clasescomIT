let helados = [];
helados.push("Vainilla",
  "Chocolate",
  "Fresa",
  "Menta con chispas de chocolate",
  "Cookies and Cream",
  "Caramelo salado",
  "Coco",
  "Dulce de leche",
  "Mango",
  "Frambuesa");
  
  function agregarGustos(helados, nuevoHelado){
    helados.push(nuevoHelado);
    helados.reverse();
    return helados;
  }
  
  agregarGustos(helados, "Queso");

  heladosAgotados = helados.splice(0, 2);
  
  console.log(helados);
  console.log(heladosAgotados);