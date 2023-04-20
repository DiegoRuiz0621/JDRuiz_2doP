function calcularPuntaje(arreglo) {
    let puntaje = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
      const numero = arreglo[i];
      
      if (numero % 2 === 0 || numero === 0) {
        puntaje += 2;
      } else if (numero === 7) {
        puntaje += 3;
      } else {
        puntaje += 1;
      }
    }
    
    return puntaje;
  }
  
  // Ejemplo de uso:
  const arregloNumeros = [7,7,7] ;
  const puntajeTotal = calcularPuntaje(arregloNumeros);
  console.log("Puntaje total:", puntajeTotal);