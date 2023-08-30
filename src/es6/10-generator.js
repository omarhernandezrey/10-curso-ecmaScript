// Declaración de una función generadora llamada 'iterate'
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

// Creación de un iterador utilizando la función generadora 'iterate'
const it = iterate(['Omar', 'Thiago', 'Roxana', 'Graciela', 'Carlos']);

// Llamadas a 'it.next()' para obtener los valores del iterador
console.log(it.next().value); // Imprime 'Omar'
console.log(it.next().value); // Imprime 'Thiago'
console.log(it.next().value); // Imprime 'Roxana'
console.log(it.next().value); // Imprime 'Graciela'
console.log(it.next().value); // Imprime 'Carlos'
console.log(it.next().value); // Imprime 'undefined'
console.log(it.next().value); // Imprime 'undefined'
console.log(it.next().value); // Imprime 'undefined'
console.log(it.next().value); // Imprime 'undefined'
