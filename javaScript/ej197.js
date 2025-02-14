const vehiculo = {
    marca: "Toyota",
    modelo: "Rav4",
    cantidadDePuertas: 4,
    anio: 2024,
    color: "black",
    toString: function () {
      console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    getColor: function () {
      return this.color;
    },
  };
const vehiculo2 = Object.create(vehiculo);
vehiculo.marca = "Honda";
vehiculo.modelo = "Pilot";
vehiculo.cantidadDePuertas = 4;
vehiculo.anio = 2025;
vehiculo.color = "Dark Blue";

vehiculo2.toString();
console.log(vehiculo2.getColor());