// Declaración de una función asíncrona 'fnAsync'
const fnAsync = () => {
    // La función retorna una nueva promesa que ejecuta una tarea asíncrona
    return new Promise((resolve, reject) => {
        // Aquí se utiliza una expresión ternaria para simular un resultado exitoso (resolve) o un error (reject)
        (true) 
            ? setTimeout(() => resolve('Async!!'), 2000) // Si es verdadero, se resuelve la promesa después de 2 segundos
            : reject(new Error('Error!')); // Si es falso, se rechaza la promesa con un error
    });
};

// Declaración de una función asíncrona 'anotherFn'
const anotherFn = async () => {
    // Se utiliza 'await' para esperar a que la promesa 'fnAsync' se resuelva o se rechace
    const something = await fnAsync();
    console.log(something); // Se imprime el resultado de la promesa ('Async!!' si se resuelve con éxito)
    console.log('Hello!'); // Se imprime 'Hello!' después de la resolución de la promesa
};

// Impresión en la consola antes de llamar a 'anotherFn'
console.log('Before');

// Llamada a la función 'anotherFn' (que es asíncrona)
anotherFn();

// Impresión en la consola después de llamar a 'anotherFn'
console.log('After');
