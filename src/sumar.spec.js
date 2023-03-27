import sumar from "./sumar.js";

describe("Calcular la suma de una cadena", () => {
  it("Vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("Calcular con una cadena de un numero", () => {
    expect(sumar("1")).toEqual(1);
  });
  it("Calcular con una cadena de dos numeros separados por coma", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("Calcular con una cadena de mas de dos numeros separados por coma", () => {
    expect(sumar("1,2,5")).toEqual(8);
  });
  it("Calcular la suma de dos numeros separados por guion", () => {
    expect(sumar("1-5")).toEqual(6);
  });
  it("Calcular la suma de mas de dos numeros separados por guion", () => {
    expect(sumar("1-5-6")).toEqual(12);
  });
  it("Calcular la suma de dos numeros separados por coma y guion", () => {
    expect(sumar("4,1-3")).toEqual(8);
  });
  it("Calcular la suma de dos numeros separados por un delimitador dado", () => {
    expect(sumar("//[;] 6;7;4")).toEqual(17);
  });
});
