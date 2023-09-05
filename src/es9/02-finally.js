const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) { // o false según tu lógica
            resolve('¡Hey, lo logramos!');
        } else {
            reject('¡Whoops!');
        }
    })
}
anotherFunction()
   .then(response => console.log(response))
   .catch(err => console.log(err))
   .finally(() => console.log('Finalmente'));
