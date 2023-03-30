function encontrarDelimitador(cadenaNumeros) {
  let delimitadores=[];
  let delimitador="";
  if(cadenaNumeros[0]==cadenaNumeros[1] && cadenaNumeros[0]=="/") //empieza el/los delimitador/es
  {
        let posicion_caracter=3;
        let existeDelimitador = true;
        while(existeDelimitador)
        {
            delimitador+=cadenaNumeros[posicion_caracter];
            posicion_caracter++;
            if(cadenaNumeros[posicion_caracter]=="]")
            {
              delimitadores.push(delimitador);
              delimitador="";     
              if(cadenaNumeros[posicion_caracter+1]=="[")
                posicion_caracter+=2;
              else
                existeDelimitador=false;
            }
        }
  }
  return delimitadores;
}

export default encontrarDelimitador;

