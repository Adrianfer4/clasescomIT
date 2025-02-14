const datos = [42, true, function() {return 'El significado de la vida es: '}];
const mensaje = datos[2];
if(datos[1]){
    console.log(mensaje(), datos[0]);
}

