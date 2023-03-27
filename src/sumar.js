function sumar(cadenaNumeros) {
  if(cadenaNumeros=="")
    return 0;
  else if(cadenaNumeros.length == 1)
  {
    return parseInt(cadenaNumeros);
  }
  else
  {
    let suma=0;
    if(cadenaNumeros[0]=="/")
    {
      cadenaNumeros = cadenaNumeros.slice(3);
      let delimitador=";"
      cadenaNumeros = cadenaNumeros.slice(2);
      cadenaNumeros = cadenaNumeros.replaceAll(delimitador,",");
    }
    cadenaNumeros = cadenaNumeros.replaceAll("-",",");
    let numeros = cadenaNumeros.split(","); //divide en un array de aquellos separados por coma

    for(let i=0;i<numeros.length;i++)
    {
      suma = suma + parseInt(numeros[i]);
    }
    return suma;
  }
}

export default sumar;
