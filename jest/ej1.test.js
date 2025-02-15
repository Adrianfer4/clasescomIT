import {
  nombre,
  apellido,
  edad,
  fechaDeNacimiento,
  direccion,
} from "../javaScript/ej1";
describe("ej 1", () => {
  test("Variables definidas", () => {
    expect(nombre).toBeUndefined();
    expect(apellido).toBeUndefined();
    expect(edad).toBeUndefined();
    expect(fechaDeNacimiento).toBeUndefined();
    expect(direccion).toBeUndefined();
  });
});
