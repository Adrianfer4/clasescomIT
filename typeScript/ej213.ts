interface Vehiculo {
  marca: string;
  modelo: string;
  color: string;
  cantidadDePasajeros: number;
}
interface Auto extends Vehiculo {
  esDescapotable: boolean;
}
interface Camion extends Vehiculo {
  cantidadDeAcoplados: number;
}
function mostrarDatosAuto({
  marca,
  modelo,
  color,
  cantidadDePasajeros,
  esDescapotable,
}: Auto): void {
  console.log(
    `Marca: ${marca}\n Modelo: ${modelo}\n Color: ${color}\n Cantidad de pasajeros: ${cantidadDePasajeros}\n Es descapotable: ${esDescapotable}`
  );
}
function mostrarDatosCamion({
  marca,
  modelo,
  color,
  cantidadDePasajeros,
  cantidadDeAcoplados,
}: Camion): void {
  console.log(
    `Marca: ${marca}\n Modelo: ${modelo}\n Color: ${color}\n Cantidad de pasajeros: ${cantidadDePasajeros}\n Cantidad de acoplados: ${cantidadDeAcoplados}`
  );
}
const auto: Auto = {
  marca: "Honda",
  modelo: "Civic",
  color: "Negro",
  cantidadDePasajeros: 5,
  esDescapotable: true,
};

const camion: Camion = {
  marca: "Volvo",
  modelo: "FH16",
  color: "Rojo",
  cantidadDePasajeros: 3,
  cantidadDeAcoplados: 2,
};
mostrarDatosAuto(auto);
mostrarDatosCamion(camion);

export default {}