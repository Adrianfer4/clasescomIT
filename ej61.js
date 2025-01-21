let dia = 5;
let nombreDelDia = null;
switch(dia){
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miercoles";
        break;
    case 4:
        nombreDelDia ="Jueves";
        break;
    case 5:
        nombreDelDia = "Viernes";
        break;
    case 6:
        nombreDelDia = "Sabado";
        break;
    case 7:
        nombreDelDia = "Domingo";
        break;
    default:
        nombreDelDia = null;
        break;
}

switch(nombreDelDia){
    case null:
        console.log("Por favor seleccionar un numero de 1 a 7");
        break;
    default:
        console.log(`El dia seleccionado es ${nombreDelDia}`);
        break;
}

if(dia === 1){
    nombreDelDia = "Lunes";
}else if(dia === 2){
    nombreDelDia = "Martes";
}else if(dia === 3){
    nombreDelDia = "Miercoles";
}else if(dia === 4){
    nombreDelDia = "Jueves";
}else if(dia === 5){
    nombreDelDia = "Viernes";
}else if(dia === 6){
    nombreDelDia = "Sabado";
}else if(dia === 7){
    nombreDelDia = "Domingo";
}else{
    nombreDelDia = null;
}

if(nombreDelDia !== null){
    console.log(`El dia seleccionado es ${nombreDelDia}`);
}else{
    console.log("Por favor seleccionar un numero de 1 a 7");
}