/*
5. Queremos realizar cálculos usando funciones y obtener los resultados. Los requerimientos
son:
• Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
• Debe haber una función para cada una de las siguientes operaciones matemáticas:
suma, resta, multiplicación y división
• Cada cálculo consta exactamente de una operación y dos argumentos (números)
• La función externa representa el operando izquierdo, la función interna representa el
operando derecho
• La división debe ser una división entera. Por ejemplo, el resultado debería ser 2 y no
2.666666...
seven(times(five())); // debe devolver 35
four(plus(nine())); // debe devolver 13
eight(minus(three())); // debe devolver 5
six(dividedBy(two())); // debe devolver 3
*/

function plus(b) {
    return function (a) {
      return a + b;
    };
}

function minus(b) {
    return function (a) {
      return a - b;
    };
  }

function times(b) {
    return function (a) {
      return a * b;
    };
  }
  
function dividedBy(b) {
    return function (a) {
      return Math.floor(a / b);
    };
  }

function zero(funcion){
    if (funcion){
        return funcion (0);
    }
    return 0;
}

function one(funcion){
    if (funcion){
        return funcion (1);
    }
    return 1;
}

function two(funcion){
    if (funcion){
        return funcion (2);
    }
    return 2;
}

function three(funcion){
    if (funcion){
        return funcion (3);
    }
    return 3;
}

function four(funcion){
    if (funcion){
        return funcion (4);
    }
    return 4;
}

function five(funcion){
    if (funcion){
        return funcion (5);
    }
    return 5;
}

function six(funcion){
    if (funcion){
        return funcion (6);
    }
    return 6;
}

function seven(funcion){
    if (funcion){
        return funcion (7);
    }
    return 7;
}

function eight(funcion){
    if (funcion){
        return funcion (8);
    }
    return 8;
}

function nine(funcion){
    if (funcion){
        return funcion (9);
    }
    return 9;
}

console.log(seven(times(five()))); // debe devolver 35
console.log(four(plus(nine()))); // debe devolver 13
console.log(eight(minus(three()))); // debe devolver 5
console.log(six(dividedBy(two()))); // debe devolver 3