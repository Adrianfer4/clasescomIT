function mostrarDatosAuto(_a) {
    var marca = _a.marca, modelo = _a.modelo, color = _a.color, cantidadDePasajeros = _a.cantidadDePasajeros, esDescapotable = _a.esDescapotable;
    console.log("Marca: ".concat(marca, "\n Modelo: ").concat(modelo, "\n Color: ").concat(color, "\n Cantidad de pasajeros: ").concat(cantidadDePasajeros, "\n Es descapotable: ").concat(esDescapotable));
}
function mostrarDatosCamion(_a) {
    var marca = _a.marca, modelo = _a.modelo, color = _a.color, cantidadDePasajeros = _a.cantidadDePasajeros, cantidadDeAcoplados = _a.cantidadDeAcoplados;
    console.log("Marca: ".concat(marca, "\n Modelo: ").concat(modelo, "\n Color: ").concat(color, "\n Cantidad de pasajeros: ").concat(cantidadDePasajeros, "\n Cantidad de acoplados: ").concat(cantidadDeAcoplados));
}
var auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};
var camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};
mostrarDatosAuto(auto);
mostrarDatosCamion(camion);
