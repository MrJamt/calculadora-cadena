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
    cadena = cadena.replace("-",",");
    let numeros = cadena.split(","); //divide en un array de aquellos separados por coma

    for(let i=0;i<numeros.length;i++)
    {
      suma = suma + parseInt(numeros[i]);
    }
    return suma;
  }
}

export default calculadora;
