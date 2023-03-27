import encontrarDelimitador from "./encontrarDelimitador";
import reemplazarDelimitador from "./reemplazarDelimitador";

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
    let delimitadores = encontrarDelimitador(cadenaNumeros);   
    if(delimitadores.length>0)
    {
      cadenaNumeros = reemplazarDelimitador(cadenaNumeros,delimitadores);
    }
    cadenaNumeros = cadenaNumeros.replaceAll("-",",");
    let numeros = cadenaNumeros.split(",");

    for(let i=0;i<numeros.length;i++)
    {
      if(numeros[i]<1000)
        suma = suma + parseInt(numeros[i]);
    }
    return suma;
  }
}

export default sumar;

