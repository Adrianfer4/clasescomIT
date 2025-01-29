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
const mutantesQueNosGustan = Array.from(mutantes);
mutantes.map(function(mutante, indice){
    if(mutante === "Prof. Charles Francis Xavier" || mutante === "James 'Logan' Howlett" || mutante === "Jean Elaine Grey"){
        mutantesQueNosGustan[indice] = "<3 " + mutante;
    }
})
console.table(mutantes);
console.table(mutantesQueNosGustan);