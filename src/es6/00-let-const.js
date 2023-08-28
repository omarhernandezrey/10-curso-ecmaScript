//Variables con var
//declarar lastName) asignar('Oscar')  lastName = 'Omar';//reasignar
var lastName = 'Oscar';
lastName = 'Omar';
console.log(lastName);

//Variables con let
//declarar fruit) asignar('Apple')  fruit = 'Kiwi';//reasignar
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//Variables con const
//declarar fruit) asignar('Apple')  fruit = 'Kiwi';//reasignar
const animal = 'perro';
// animal = "gato"; //error, no se puede reasignar una variable declarada como constante
console.log(animal);

//funcion con el bloque dentro

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';// function scope
        let fruit2 = 'Kiwi';// block scope
        const fruit3 = 'Banana';// block scope
    }
    console.log(fruit1);
    // console.log(fruit2); // Error, fuera del alcance del bloque
    // console.log(fruit3); // Error, fuera del alcance del bloque
}
fruits();

