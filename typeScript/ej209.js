var IconsZise;
(function (IconsZise) {
    IconsZise[IconsZise["SMALL"] = 8] = "SMALL";
    IconsZise[IconsZise["MEDIUM"] = 12] = "MEDIUM";
    IconsZise[IconsZise["LARGE"] = 24] = "LARGE";
    IconsZise[IconsZise["XL"] = 48] = "XL";
})(IconsZise || (IconsZise = {}));
var icono = {
    nombre: String,
    tamanio: IconsZise,
};
function showIcon(nombre, tamanio) {
    console.log("El nombre del icono es ".concat(nombre, " y su tama\u00F1o es de ").concat(tamanio, " puntos"));
}
showIcon(icono.nombre("wave"), IconsZise.XL);
showIcon("muscle", IconsZise.SMALL);
