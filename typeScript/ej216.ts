interface Mascota {
    nombre: string,
    edad: number,
}
type TipoDeMascota = "perro" | "gato" | "mono";
function mostrarMascota(mascota: Mascota, tipo: TipoDeMascota){
    if(tipo === "perro") {
        console.log(`La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    }else if(tipo === "gato") {
        console.log(`La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    }else if(tipo === "mono") {
        console.log(`La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años`)
    }
}
const mono = {
    nombre: "Martin",
    edad: 1
}
const gato = {
    nombre: "Michi",
    edad: 2
}
const perro = {
    nombre: "Scooby",
    edad: 3
}
mostrarMascota(mono, "mono");
mostrarMascota(gato, "gato");
mostrarMascota(perro, "perro");

export default {}