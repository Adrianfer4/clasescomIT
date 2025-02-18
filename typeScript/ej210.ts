let mascota: {
  nombre: string;
  edad: number;
  fechaDeNacimiento?: string;
} = {
  nombre: "toby",
  edad: 1,
};
function MostrarDatosMascota(mascota: {
  nombre: string;
  edad: number;
  fechaDeNacimiento?: string;
}) {
  console.log(
    `La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} año`
  );
  if (mascota.fechaDeNacimiento) {
    console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
  }
}
MostrarDatosMascota(mascota);
mascota.fechaDeNacimiento = "02-01-2024";
MostrarDatosMascota(mascota);

export default {};