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
const todosLosMutantes = mutantes.reduce(function(acc, mutante, indice){
    return indice === 0 ? mutante : `${acc}, ${mutante}`;
}, "");
console.log(todosLosMutantes);