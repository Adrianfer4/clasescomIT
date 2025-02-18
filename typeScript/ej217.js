var animales = [
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
function mostrarDatosDeLaColeccion(dato) {
    var datos = dato;
    datos.forEach(function (animal, index) {
        console.log("".concat(index + 1, " ").concat(animal.tipoAnimal, ":"));
        console.log("- Raza: ".concat(animal.raza));
        console.log("- Muerde: ".concat(animal.muerde ? "Sí" : "No"));
        console.log("- Colores: ".concat(animal.color.join(", ")));
        console.log("--------------------------------");
    });
}
mostrarDatosDeLaColeccion(animales);
