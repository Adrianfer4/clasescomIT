var notas = [6, 8, 7.5];
var notas2 = [5, 4, 8];
var Vehiiculo = /** @class */ (function () {
    function Vehiiculo(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    return Vehiiculo;
}());
var vehiculo1 = new Vehiiculo('Toyota', 'Rav4', 2024, 'negro');
var vehiculo3 = new Vehiiculo('Toyota', '4Runner', 2010, 'gris');
var vehiculo4 = new Vehiiculo('Honda', 'Pilot', 2020, 'blanco');
var vehiculo5 = new Vehiiculo('Honda', 'CR-V', 2015, 'rojo');
var vehiculos = [vehiculo1, vehiculo3, vehiculo4, vehiculo5];
console.log(vehiculos);
