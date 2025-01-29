const mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip 'Hank' McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alejandro Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"
];
let mutantesOriginal = Array.from(mutantes);
let mutantesOrdenados = Array.from(mutantes).sort();
let mutantesRevertidos = Array.from(mutantesOrdenados).reverse();
let mutantesSepardos = mutantesOriginal.join(" * ");

console.log("-------------------");
console.log(mutantesOriginal);
console.log("-------------------");
console.log(mutantesOrdenados);
console.log("-------------------");
console.log(mutantesRevertidos);
console.log("-------------------");
console.log(mutantesSepardos);