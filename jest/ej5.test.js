import { mostrarValores } from "../javaScript/ej5";
const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("ej 5", () => {
  afterEach(() => {
    log.mockReset();
  });
  test("Mostrar valores en pantalla", () => {
    mostrarValores();

    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenCalledWith("Nestor");
    expect(log).toHaveBeenCalledWith("Fernandez");
    expect(log).toHaveBeenCalledWith(29);
    expect(log).toHaveBeenCalledWith("14-may-1995");
    expect(log).toHaveBeenCalledWith("Buena Fe");
  });
});
