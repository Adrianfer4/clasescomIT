const tieneError = false;
const error = new Error("Ocurrio un error");
function crearPromesa() {
  return new Promise((onSuccess, onError) => {
    if (tieneError) {
      onError(error);
    } else {
      onSuccess("Promesa exitosa");
    }
  });
}
const promesa = crearPromesa();
promesa.then((mensaje) => {
  console.log(mensaje);
});
promesa.catch((error) => {
    console.log(error.mensaje);
});
