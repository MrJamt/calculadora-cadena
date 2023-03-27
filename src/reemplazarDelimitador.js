//import encontrarDelimitador from "./encontrarDelimitador";

function reemplazarDelimitador(cadenaNumeros,delimitadores) {
    
  cadenaNumeros = cadenaNumeros.slice(2); //quitar los // iniciales
  for(let i=0;i<delimitadores.length;i++)
  {
    cadenaNumeros = cadenaNumeros.slice(2+delimitadores[i].length); //2 ya que si o si debemos borrar []
    cadenaNumeros = cadenaNumeros.replaceAll(delimitadores[i],",");
  }
  return cadenaNumeros;
}

export default reemplazarDelimitador;

