//declaracion
class User {};
/* //instancia de una clase
const newUser = new User(); */
// Definición de una clase llamada 'User'
class User {
    // Método 'greeting' de la clase 'User'
    greeting() {
        return 'Hello'; // El método devuelve la cadena de texto 'Hello'
    }
}

// Creación de una instancia de la clase 'User' utilizando la palabra clave 'new'
const gndx = new User();

// Llamada al método 'greeting' de la instancia 'gndx' de la clase 'User'
// Imprime el resultado del método: 'Hello'
console.log(gndx.greeting());
const bebeloper = new User();
console.log(bebeloper.greeting());
//-----------------------------------------------------------------------------------------
// constructor

// Definición de una clase llamada 'User'
class User {
    // Constructor de la clase 'User'
    constructor() {
        console.log('Nuevo Usuario'); // Imprime un mensaje al crear una instancia de la clase
    }

    // Método 'greeting' de la clase 'User'
    greeting() {
        return 'Hello'; // El método devuelve la cadena de texto 'Hello'
    }
}

// Creación de una instancia de la clase 'User' utilizando la palabra clave 'new'
const david = new User();

// Llamada al método 'greeting' de la instancia 'david' de la clase 'User'
// Imprime el resultado del método: 'Hello'
console.log(david.greeting());

//-------------------------------------------------------------------------------------------
// this = hace referencia al elemto padre que lo contine



// Definición de una clase llamada 'User'
class User {
    // Constructor de la clase 'User' con un parámetro 'name'
    constructor(name) {
        // La propiedad 'name' se asigna al objeto 'this' (la instancia de la clase)
        this.name = name;
    }

    // Método 'speak' de la clase 'User'
    speak() {
        return 'Hello'; // El método devuelve la cadena de texto 'Hello'
    }

    // Método 'greeting' de la clase 'User'
    greeting() {
        // Utilizamos el método 'speak' y la propiedad 'name' para construir el saludo
        return `${this.speak()} ${this.name}`;
    }
}

// Creación de una instancia de la clase 'User' utilizando el constructor con el parámetro 'name'
const ana = new User('Ana');

// Llamada al método 'greeting' de la instancia 'ana' de la clase 'User'
// Imprime el resultado del método: 'Hello Ana'
console.log(ana.greeting());

//-------------------------------------------------------------------------------------------
//setters getters
// Definición de una clase llamada 'User'
class User {
    // Constructor de la clase 'User' con dos parámetros: 'name' y 'age'
    constructor(name, age) {
        // Las propiedades 'name' y 'age' se asignan al objeto 'this' (la instancia de la clase)
        this.name = name;
        this.age = age;
    }

    // Método 'speak' de la clase 'User'
    speak() {
        return 'Hello'; // El método devuelve la cadena de texto 'Hello'
    }

    // Método 'greeting' de la clase 'User'
    greeting() {
        // Utilizamos el método 'speak' y la propiedad 'name' para construir el saludo
        return `${this.speak()} ${this.name}`;
    }

    // Getter 'uAge' para obtener el valor de la propiedad 'age'
    get uAge() {
        return this.age;
    }

    // Setter 'uAge' para asignar un nuevo valor a la propiedad 'age'
    set uAge(n) {
        this.age = n;
    }
}

// Creación de una instancia de la clase 'User' utilizando el constructor con los parámetros 'name' y 'age'
const developer1 = new User('David', 15);

// Llamada al getter 'uAge' para obtener el valor actual de la propiedad 'age'
console.log(developer1.uAge); // Imprime 15

// Llamada al setter 'uAge' para cambiar el valor de la propiedad 'age' a 20
console.log(developer1.uAge = 20); // Imprime 20
