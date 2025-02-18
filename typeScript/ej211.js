function MostrarDatosMascota(mascota) {
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1o"));
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
}
var mascota1 = {
    nombre: "toby",
    edad: 1,
};
var mascota2 = {
    nombre: "toby",
    edad: 1,
    fechaDeNacimiento: "02-01-2024",
};
MostrarDatosMascota(mascota1);
MostrarDatosMascota(mascota2);
