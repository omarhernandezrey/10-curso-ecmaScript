// Declaración de una expresión regular 'regex' para coincidir con fechas en formato "AAAA-MM-DD"
const regex = /(\d{4})-(\d{2})-(\d{2})/;

// Llamada al método 'exec' de la expresión regular 'regex' para buscar coincidencias en la cadena '2022-01-01'
const matchers = regex.exec('2022-01-01');

// Muestra las partes coincidentes en forma de tabla en la consola
console.table(matchers);
