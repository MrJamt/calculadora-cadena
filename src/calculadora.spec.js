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
  it("Calcular con una cadena de mas de dos numeros separados por coma", () => {
    expect(calculadora("1,2,5")).toEqual(8);
  });
  it("Calcular la suma de dos numeros separados por guion", () => {
    expect(calculadora("1-5")).toEqual(6);
  });
  it("Calcular la suma de mas de dos numeros separados por guion", () => {
    expect(calculadora("1-5-6")).toEqual(12);
  });
});
