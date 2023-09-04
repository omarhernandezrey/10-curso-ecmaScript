// Declaración de una cadena de texto llamada 'strings'
const strings = 'hello';

// Uso del método 'padStart()' para agregar caracteres al principio de la cadena
// hasta que tenga una longitud de 10 caracteres usando 'hi' como relleno
console.log(strings.padStart(10, 'hi'));

// Uso del método 'padStart()' para agregar caracteres al principio de la cadena
// hasta que tenga una longitud de 6 caracteres usando '_' como relleno
console.log(strings.padStart(6, '_'));

// Resultados:
// 'hihhello'
// '_hello'
