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
let mutantesEspeciales = "";
mutantes.forEach(function(mutante){
    if(mutante === "Jean Elaine Grey" || mutante === "James 'Logan' Howlett"){
        mutantesEspeciales += (mutantesEspeciales ? " / " : "") + mutante;
    }
});

console.log(`Mutantes concatenados: ${mutantesEspeciales}`);