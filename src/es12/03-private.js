class User {
   
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #speak() {
        return 'Hello'; 
    }


    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }


    set #uAge(n) {
        this.age = n;
    }
}

const developer1 = new User('David', 15);

console.log(developer1.uAge); 

console.log(developer1.uAge = 20);
