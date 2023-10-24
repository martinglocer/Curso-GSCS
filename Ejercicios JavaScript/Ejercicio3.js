function miFilter(arreglo, funcionDeFilter) {
    const numeros = [];
    for (let i=0; i< arreglo.length; i++) {
        if (funcionDeFilter(arreglo[i])) {
            numeros.push(arreglo[i]);
        }
    }
    return numeros;
}

const nums = [10, 20, 30, 40, 50];
const resultado = miFilter(nums, function(numero) {
    return numero > 19;
  });

console.log(resultado)