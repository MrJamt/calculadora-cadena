import encontrarDelimitador from "./encontrarDelimitador";

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
    let delimitador=encontrarDelimitador(cadenaNumeros);    
    if(delimitador!="")
    {
      cadenaNumeros = cadenaNumeros.slice(4+delimitador.length);
      cadenaNumeros = cadenaNumeros.replaceAll(delimitador,",");
    }
    cadenaNumeros = cadenaNumeros.replaceAll("-",",");
    let numeros = cadenaNumeros.split(",");

    for(let i=0;i<numeros.length;i++)
    {
      suma = suma + parseInt(numeros[i]);
    }
    return suma;
  }
}

export default sumar;

