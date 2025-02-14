const persona = {
  nombre: "Nestor",
  apellido: "Fernandez",
  edad: 29,
  ocupacion: "estudiante",
  saludar() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  },
  presentar() {
    console.log(
      `Soy ${this.nombre} ${this.apellido} tengo ${this.edad} y soy ${this.ocupacion}`
    );
  },
  cambiarOcupacion(nuevaOcupacion) {
    this.ocupacion = nuevaOcupacion;
    console.log(`Ahora trabajo como ${this.ocupacion}`);
  },
};
persona.cambiarOcupacion = "programador";
for (const key in persona) {
  if (typeof persona[key] === "function") {
    persona[key]();
  } else {
    console.log(`${key}: ${persona[key]}
    `);
  }
}
