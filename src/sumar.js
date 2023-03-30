import encontrarDelimitador from "./encontrarDelimitador";
import reemplazarDelimitador from "./reemplazarDelimitador";

function sumar(cadenaNumeros) {
  if(cadenaNumeros=="")
    return 0;
  
  if(cadenaNumeros.length == 1)
    return parseInt(cadenaNumeros);

  let sumaTotal=0;
  let delimitadores = encontrarDelimitador(cadenaNumeros);   
  if(delimitadores.length>0)
  {
    cadenaNumeros = reemplazarDelimitador(cadenaNumeros,delimitadores);
  }
  cadenaNumeros = cadenaNumeros.replaceAll("-",",");
  let lista_numeros = cadenaNumeros.split(",");

  for(let posicion=0;posicion<lista_numeros.length;posicion++)
  {
    if(lista_numeros[posicion]<1000)
    sumaTotal += parseInt(lista_numeros[posicion]);
  }
  return sumaTotal;
}


export default sumar;

