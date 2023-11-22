/* Ejercicio
Crear una clase que represente una pila (LIFO). Dicha clase debe tener los siguientes métodos:
• Agregar elementos a la pila push
• Sacar elementos de la pila pop
• Consultar la cantidad de elementos size
Además:
1 Diseñar la clase de forma tal que se puedan crear pilas para tipos concretos, ej: boolean,
string, number, o cualquier otro tipo. Pero que solo permita dichos tipos.
2 Crear una nueva clase que no permita el agregado de elementos repetidos.
*/

// Clase base para la pila (LIFO)
class Pila<T> {
    elementos: T[] = [];

    push(elemento: T): void {
        this.elementos.push(elemento);
    }

    pop(): T | undefined {
        return this.elementos.pop();
    }

    size(): number {
        return this.elementos.length;
    }
}

// Ejemplo de uso para una pila de números
let pilaNumeros = new Pila<number>();
pilaNumeros.push(1);
pilaNumeros.push(2);
console.log("Pila de números:", pilaNumeros.size(), pilaNumeros.pop(), pilaNumeros.pop());

// Ejemplo de uso para una pila de strings
let pilaStrings = new Pila<string>();
pilaStrings.push("Uno");
pilaStrings.push("Dos");
console.log("Pila de strings:", pilaStrings.size(), pilaStrings.pop(), pilaStrings.pop());

// Clase que no permite elementos repetidos
class PilaSinRepetidos<T> extends Pila<T> {
    push(elemento: T): void {
        if (!this.elementos.includes(elemento)) {
            super.push(elemento);
        }
    }
}

// Ejemplo de uso para una pila sin elementos repetidos
let pilaSinRepetidos = new PilaSinRepetidos<number>();
pilaSinRepetidos.push(1);
pilaSinRepetidos.push(2);
pilaSinRepetidos.push(1); 
console.log("Pila sin repetidos: ", pilaSinRepetidos.size(), pilaSinRepetidos.pop(), pilaSinRepetidos.pop());
