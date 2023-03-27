function encontrarDelimitador(cadenaNumeros) {
  let delimitador="";
  if(cadenaNumeros[0]==cadenaNumeros[1] && cadenaNumeros[0]=="/") //empieza el delimitador
  {
        let i=3;
        while(cadenaNumeros[i]!="]")
        {
          delimitador+=cadenaNumeros[i];
          i++;
        }
  }
  return delimitador;
}

export default encontrarDelimitador;

