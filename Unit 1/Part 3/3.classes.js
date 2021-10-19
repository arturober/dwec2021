// Future -> ES2022
class Person {
    #name; //private
    #age; // private

    constructor(name = "Anonymous", age = 1) {
        this.#name = name;
        this.#age = age;
    }

    sayHello() {
        console.log(`${this.#name} (${this.#age}) says hello!`);
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        this.#age = age;
    }
}

let p = new Person("John", 23);
p.sayHello();
let p2 = new Person();
p2.sayHello();

p.name = "Peter";
console.log(p.name);