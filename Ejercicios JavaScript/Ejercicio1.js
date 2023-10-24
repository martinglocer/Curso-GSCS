function miMap(arreglo, funcionDeMapeo) {
    const resultado = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      resultado.push(funcionDeMapeo(arreglo[i], i, arreglo));
    }
  
    return resultado;
  }
  
  // Ejemplo
  const numeros = [1, 2, 3, 4, 5];
  const numerosDuplicados = miMap(numeros, function(numero) {
    return numero * 2;
  });
  
  console.log(numerosDuplicados); 
  