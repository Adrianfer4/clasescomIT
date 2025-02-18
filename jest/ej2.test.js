import {
  nombre,
  apellido,
  edad,
  fechaDeNacimiento,
  direccion,
} from "../javaScript/ej2.js";
describe("ej2", () => {
  test("Variable nombre con su valor", () => {
    expect(nombre).toBe("Nestor");
  });
  test("Variable apellido con su valor", () => {
    expect(apellido).toBe("Fernandez");
  });
  test("Variable edad con su valor", () => {
    expect(edad).toBe(29);
  });
  test("Variable fechaDeNacimiento con su valor", () => {
    expect(fechaDeNacimiento).toBe("14-may-1995");
  });
  test("Variable direccion con su valor", () => {
    expect(direccion).toBe("Buena Fe");
  });
});
