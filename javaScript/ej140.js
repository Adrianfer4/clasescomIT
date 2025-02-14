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
const mutantesFiltrados = mutantes.filter(function(_, indice){
    return indice !== 1;
});
console.log(mutantes[1]);
console.log(mutantesFiltrados[1]);
