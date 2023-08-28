// Función 'newUser' con valores predeterminados usando operador lógico '||'
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34; 
    var country = country || 'MX';
    console.log(name, age, country);
}

// Llamadas a la función 'newUser' con diferentes conjuntos de argumentos
newUser(); // Usará los valores predeterminados ('Oscar', 34, 'MX')
newUser('Omar', '33', 'CO');
newUser('Marinela', '20', 'Ve');

// Función 'newAdmin' con parámetros con valores por defecto
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

// Llamadas a la función 'newAdmin' con diferentes conjuntos de argumentos
newAdmin(); // Usará los valores por defecto ('Oscar', 32, 'CL')
newAdmin('Ana', 28, 'E.U');
