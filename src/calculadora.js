function calculadora(cadenaNumeros) {
  if(cadenaNumeros=="")
    return 0;
  else if(cadenaNumeros.length == 1)
  {
    return parseInt(cadenaNumeros);
  }
  else
  {
    let suma=0;
    cadenaNumeros = cadenaNumeros.replaceAll("-",",");
    let numeros = cadenaNumeros.split(","); //divide en un array de aquellos separados por coma

    for(let i=0;i<numeros.length;i++)
    {
      suma = suma + parseInt(numeros[i]);
    }
    return suma;
  }
}

export default calculadora;
