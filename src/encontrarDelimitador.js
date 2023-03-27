function encontrarDelimitador(cadenaNumeros) {
  let delimitadores=[];
  let delimitador="";
  if(cadenaNumeros[0]==cadenaNumeros[1] && cadenaNumeros[0]=="/") //empieza el/los delimitador/es
  {
        let i=3;
        let bandera = true;
        while(bandera)
        {
            delimitador+=cadenaNumeros[i];
            i++;
            if(cadenaNumeros[i]=="]")
            {
              delimitadores.push(delimitador);
              delimitador="";     
              if(cadenaNumeros[i+1]=="[")
              {
               i=i+2; 
              }
              else
                bandera=false;
          }
        }
  }
  return delimitadores;
}

export default encontrarDelimitador;

