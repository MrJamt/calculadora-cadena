function encontrarDelimitador(cadenaNumeros) {
  let delimitadores=[];
  let delimitador="";
  if(cadenaNumeros[0]==cadenaNumeros[1] && cadenaNumeros[0]=="/") //empieza el/los delimitador/es
  {
    delimitador = cadenaNumeros.slice(cadenaNumeros.indexOf("[")+1,cadenaNumeros.lastIndexOf("] "));
    delimitadores = delimitador.split("][");
  }
  return delimitadores;
}

export default encontrarDelimitador;

