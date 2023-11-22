/*Ejercicio
1 Crear una clase para representar a las figuras geométricas, que permita calcular el perimetro
y el area
2 Crear una clase que represente a los cuadrados.
3 Crear una clase que represente a los círculos.
4 Aplicando polimorfismo, muestre un ejemplo utilizando las clases anteriores.
*/

//1 
class Figura {
    nombre: string;
    constructor(nombre: string){
        this.nombre= nombre;
    } 
    perimetro(){}
    area(){}
    
    getNombre() {
        return this.nombre
    }
    
}

//2
class Cuadrado extends Figura {
    lado: number;
    constructor(lado:number){
        super("Cuadrado");
        this.lado = lado;
    }
    perimetro(): any{
        return this.lado * 4;
    }
    area(): any{
        return this.lado * this.lado;
    }
}

//3
class Circulo extends Figura{
    radio: number;
    constructor(radio:number ){
        super("Circulo");
        this.radio = radio;
    }
    perimetro(): any{
        return this.radio * 2 * Math.PI;
    }
    area(): any{
        return this.radio * this.radio * Math.PI;
    }
}

//4
let cu: Figura = new Cuadrado (4);
let ci: Figura = new Circulo(5);
console.log("El nombre de la figura es: " + cu.getNombre());
console.log("Su perimetro es de: " + cu.perimetro());
console.log("y su area es de: " + cu.area());
console.log("El nombre de la figura es: " + ci.getNombre());
console.log("Su perimetro es de: " + ci.perimetro());
console.log("y su area es de: " + ci.area());
