const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {//o false
            resolve('Hey lo logramos!!');
        } else {
            reject('whooooops!');
        }
    })
}
anotherFunction()
   .then(response => console.log(response))
   .catch (err => console.log(err));