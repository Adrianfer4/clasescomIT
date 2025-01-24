let dibujo = "**************";
for(let i = 15; i > 0; i--){
    console.log(dibujo);
    dibujo = dibujo.slice(0, -1);
}
