const estadoProfesor = { 
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan, Pablo, Char"],
    leGustaJavaScript: true,
  };
const estadoAlumno = {...estadoProfesor, nombre: "Nestor", apellido: "Fernandez", amigos: ["Carlos", "Jose", "Luis"]};

const nuevoEstado = {
    ...estadoProfesor, ...estadoAlumno
};
console.log(nuevoEstado);