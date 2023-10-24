//Implemente su propia función reduce

function miReduce(arreglo, funcionDeReduce) {
    let acumulador = 0 ;
    for (let i=0; i< arreglo.length; i++) {
        acumulador = funcionDeReduce(arreglo[i], acumulador)
        }
    return acumulador;
}

const nums = [10, 20, 30, 40, 50, 60];
const resultado = miReduce(nums, function(numero, acum) {
    return acum + numero;
  });

console.log(resultado)