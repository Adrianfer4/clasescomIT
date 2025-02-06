let numero = 15;
let dibujo = "**************";
while(numero > 0){
    console.log(dibujo);
    dibujo = dibujo.slice(0, -1);
    numero--;
}