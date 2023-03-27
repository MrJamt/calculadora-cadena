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
    let delimitadores = encontrarDelimitador(cadenaNumeros);   
    if(delimitadores.length>0)
    {
      cadenaNumeros = cadenaNumeros.slice(2); //quitar los // iniciales
      for(let i=0;i<delimitadores.length;i++)
      {
        cadenaNumeros = cadenaNumeros.slice(2+delimitadores[i].length); //2 ya que si o si debemos borrar []
        cadenaNumeros = cadenaNumeros.replaceAll(delimitadores[i],",");
      }
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

