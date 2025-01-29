const alumnas = ["Monica", "Lucia", "Catalina", "Patricia", "Jessica"];
let alumnos = ["Juan", "Carlos", "Nicolas", "Nestor", "David"];
const todosLosAlumnos = ["Monica", "Lucia", "Catalina", "Patricia", "Jessica", "Juan", "Carlos", "Nicolas", "Nestor", "David"];

console.log("------------------");
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

console.log("------------------");
let i = 0;
while(i < alumnos.length){
    console.log(alumnos[i]);
    i++;
}
console.log("------------------");
todosLosAlumnos.forEach(alumno => {
    console.log(alumno);
});