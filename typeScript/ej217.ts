type Color = "marron" | "negro" | "blanco" | "gris";

type TipoAnimal = "perro" | "gato" | "leon";

interface Animal {
  raza: string;
  muerde: boolean;
  color: Color[];
  tipoAnimal: TipoAnimal[];
}
const animales: Animal[] = [
  {
    raza: "Cocker",
    muerde: true,
    color: ["negro"],
    tipoAnimal: ["perro"]
  },

  {
    raza: "Persa",
    muerde: false,
    color: ["marron", "blanco"],
    tipoAnimal: ["gato"]
  },

  {
    raza: "León Africano",
    muerde: true,
    color: ["marron", "negro"],
    tipoAnimal: ["leon"]
  },
];

function mostrarDatosDeLaColeccion(dato: unknown): void {
  const datos = (dato as Animal[]);
  datos.forEach((animal, index) => {
    console.log(`${index + 1} ${animal.tipoAnimal}:`);
            console.log(`- Raza: ${animal.raza}`);
            console.log(`- Muerde: ${animal.muerde ? "Sí" : "No"}`);
            console.log(`- Colores: ${animal.color.join(", ")}`);
            console.log("--------------------------------");
  });
}
mostrarDatosDeLaColeccion(animales);

export default {}