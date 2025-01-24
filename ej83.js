let numero = 15;
let dibujo = "**************";
do{
    console.log(dibujo);
    dibujo = dibujo.slice(0, -1);
    numero--;
}while(numero > 0);