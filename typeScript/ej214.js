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
function mostrarAutoOCamion(vehiculo) {
    if ("esDescapotable" in vehiculo) {
        console.log("Es descapotable: ".concat(vehiculo.esDescapotable));
    }
    else {
        console.log("Cantidad de acoplados: ".concat(vehiculo.cantidadDeAcoplados));
    }
}
mostrarAutoOCamion(auto);
mostrarAutoOCamion(camion);
