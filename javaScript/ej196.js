const vehiculo = {
  marca: "Toyota",
  modelo: "Rav4",
  cantidadDePuertas: 4,
  anio: 2024,
  color: "Black",
  toString: function () {
    console.log(`${this.marca} ${this.modelo} ${this.anio}`);
  },
  getColor: function () {
    return this.color;
  },
};
function Vehiculo(marca, modelo, cantidadDePuertas, anio, color) {
  return {
    marca,
    modelo,
    cantidadDePuertas,
    anio,
    color,
    toString: function () {
      console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    getColor: function () {
      return this.color;
    },
  };
}

const vehiculo2 = new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue");
vehiculo.toString();
console.log(vehiculo.getColor());
vehiculo2.toString();
console.log(vehiculo2.getColor());
