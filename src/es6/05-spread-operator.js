// Spread operator
let person = {
    name: 'Oscar',
    age: 28
};
let country = 'MXS';

// Crear un nuevo objeto 'data' con las propiedades de 'person' y 'country'
let data = {id: 1, ...person, country};
console.log(data); // Imprime { id: 1, name: 'Oscar', age: 28, country: 'MXS' }

// Rest parameter
function sum(num, ...values) {
    console.log(values); // Imprime un array con los argumentos adicionales [1, 2, 3]
    console.log(num + values[0]); // Imprime la suma de 'num' y el primer valor del array 'values'
    return num + values[0]; // Retorna la suma
}

// Llamada a la función 'sum' con varios argumentos
sum(1, 1, 2, 3); // Imprime [1, 2, 3] y luego imprime 2 (1 + 1)
