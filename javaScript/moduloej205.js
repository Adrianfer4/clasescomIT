export function mostrarNumeros(inicio, fin) {
  if (typeof inicio !== "number" || typeof fin !== "number") {
    console.log("Los parametros deben ser de tipo number");
    return;
  }
  if (inicio === fin) {
    console.log(`Los dos numeros son ${inicio}`);
  } else if (inicio < fin) {
    for (let numero = inicio; numero <= fin; numero++) {
      console.log(numero);
    }
  } else {
    for (let numero = inicio; numero >= fin; numero--) {
      console.log(numero);
    }
  }
}
export const inicio = 0;
export const fin = 100;

