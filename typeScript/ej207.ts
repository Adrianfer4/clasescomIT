const notas: number[] = [6, 8, 7.5];
const notas2: Array<number> = [5, 4, 8];
class Vehiiculo {
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  constructor(marca: string, modelo: string, anio: number, color: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
  }
}
const vehiculo1 = new Vehiiculo('Toyota', 'Rav4', 2024, 'negro');
const vehiculo3 = new Vehiiculo('Toyota', '4Runner', 2010, 'gris');
const vehiculo4 = new Vehiiculo('Honda', 'Pilot', 2020, 'blanco');
const vehiculo5 = new Vehiiculo('Honda', 'CR-V', 2015, 'rojo');
const vehiculos: Array<Vehiiculo> = [vehiculo1, vehiculo3, vehiculo4, vehiculo5];
console.log(vehiculos);
export default {};