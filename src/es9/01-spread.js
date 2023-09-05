// Declaración de un objeto llamado 'user' con varias propiedades
const user = {
    username: 'gndx',
    age: 34,
    country: 'CO'
};

// Utilizando la desestructuración de objetos para extraer la propiedad 'username' y el resto de las propiedades en 'values'
const { username, ...values } = user;

// Imprime el valor de la variable 'username', que contendrá el valor de 'user.username'
console.log(username); // Imprime 'gndx'

// Imprime el valor de la variable 'values', que contendrá un objeto con las propiedades restantes de 'user' (en este caso, 'age' y 'country')
console.log(values); // Imprime { age: 34, country: 'CO' }
