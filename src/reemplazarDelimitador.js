function reemplazarDelimitador(cadenaNumeros,delimitadores) {
    
  cadenaNumeros = cadenaNumeros.slice(2); //quita los // iniciales
  for(let posicion_delimitador=0;posicion_delimitador<delimitadores.length;posicion_delimitador++)
  {
    cadenaNumeros = cadenaNumeros.slice(2+delimitadores[posicion_delimitador].length); //2 ya que si o si debemos borrar []
    cadenaNumeros = cadenaNumeros.replaceAll(delimitadores[posicion_delimitador],",");
  }
  return cadenaNumeros;
}

export default reemplazarDelimitador;

