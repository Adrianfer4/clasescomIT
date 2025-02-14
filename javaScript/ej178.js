function cantidadDeCaracteres(nombreTexto) {
  if (typeof nombreTexto === "string") {
    console.log(`El texto "${nombreTexto}" tiene ${nombreTexto.length} caracteres.`);
  }else{
    console.log(`El valor proporcionado ${nombreTexto} no es un texto valido.`)
  }
}
cantidadDeCaracteres("perro");
cantidadDeCaracteres("");
cantidadDeCaracteres(undefined);
