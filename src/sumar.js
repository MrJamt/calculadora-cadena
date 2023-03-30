import encontrarDelimitador from "./encontrarDelimitador";
import reemplazarDelimitador from "./reemplazarDelimitador";

function sumar(cadenaNumeros) {
  if(cadenaNumeros=="")
    return 0;
  
  if(cadenaNumeros.length == 1)
    return parseInt(cadenaNumeros);
  
  let lista_numeros = obtenerNumerosSeparandoDelimitadores(cadenaNumeros);

  let sumaTotal=0;
  for(let posicion=0;posicion<lista_numeros.length;posicion++)
  {
    if(lista_numeros[posicion]<1000)
    sumaTotal += parseInt(lista_numeros[posicion]);
  }
  return sumaTotal;
}

function obtenerNumerosSeparandoDelimitadores(cadenaNumeros)
{
  let delimitadores = encontrarDelimitador(cadenaNumeros);   
  if(delimitadores.length>0)
  {
    cadenaNumeros = reemplazarDelimitador(cadenaNumeros,delimitadores);
  }
  cadenaNumeros = cadenaNumeros.replaceAll("-",",");
  return cadenaNumeros.split(",");
}


export default sumar;

