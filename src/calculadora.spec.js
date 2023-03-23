import calculadora from "./calculadora.js";

describe("Calcular la suma de una cadena", () => {
  it("Vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("Calcular con una cadena de un numero", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("Calcular con una cadena de dos numeros separados por coma", () => {
    expect(calculadora("1,2")).toEqual(3);
  });
});
