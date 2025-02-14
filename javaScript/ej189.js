function crearPromesa(mensaje) {
  return new Promise((onSuccess) => {
    const onSucecessHandler = () => onSuccess(mensaje);
    setTimeout(onSucecessHandler, 5000);
  });
}

async function mostrarPromesa(mensaje) {
  const resultado = await crearPromesa(mensaje);
  return resultado;
}
mostrarPromesa("Wow, estamos usando async / await").then((resultado) => {
  console.log(resultado);
});
