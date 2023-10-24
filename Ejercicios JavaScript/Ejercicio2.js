function miFind(arreglo, funcionDeFind) {
    let num ;
    for (let i=0; i< arreglo.length; i++) {
        if (funcionDeFind(arreglo[i])) {
            num = arreglo[i];
            break;
        }
    }
    return num;
}

const nums = [10, 20, 30, 40, 50];
const resultado = miFind(nums, function(numero) {
    return numero > 60;
  });

console.log(resultado)