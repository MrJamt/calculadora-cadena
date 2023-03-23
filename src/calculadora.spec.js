import calculadora from "./calculadora.js";

describe("Calcular la suma de una cadena", () => {
  it("Vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
});
