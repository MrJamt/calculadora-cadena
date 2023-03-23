function calculadora(cadena) {
  if(cadena=="")
    return 0;
  else if(cadena.length == 1)
  {
    return parseInt(cadena);
  }
  else
  {
    let suma=0;
    let numeros = cadena.split(","); //divide en un array de aquellos separados por coma
    suma = suma + parseInt(numeros[0]);
    suma = suma + parseInt(numeros[1]);
    return suma;
  }
}

export default calculadora;
