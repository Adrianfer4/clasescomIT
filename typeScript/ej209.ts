enum IconsZise {
  SMALL = 8,
  MEDIUM = 12,
  LARGE = 24,
  XL = 48,
}
const icono = {
  nombre: String,
  tamanio: IconsZise,
};
function showIcon(nombre: String, tamanio: IconsZise) {
  console.log(
    `El nombre del icono es ${nombre} y su tamaño es de ${tamanio} puntos`
  );
}
showIcon(icono.nombre("wave"), IconsZise.XL);
showIcon("muscle", IconsZise.SMALL);
export default {};