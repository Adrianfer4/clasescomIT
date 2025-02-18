type Mascota = {
    nombre: string,
    edad: number, 
    fechaDeNacimiento?: string
}

  function MostrarDatosMascota(mascota: Mascota): void {
    console.log(
      `La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} año`
    );
    if (mascota.fechaDeNacimiento) {
      console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
    }
  }

  const mascota1: Mascota = {
    nombre: "toby",
    edad: 1,
  };

  const mascota2: Mascota = {
    nombre: "toby",
    edad: 1,
    fechaDeNacimiento: "02-01-2024",
  };

  MostrarDatosMascota(mascota1);
  MostrarDatosMascota(mascota2);
  


  export default {};