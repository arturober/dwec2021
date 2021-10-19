class Person {
    constructor(name = "Anonymous", age = 1) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`${this.name} (${this.age}) says hello!`);
    }

    toString() {
        return `${this.name} (${this.age})`;
    }

    valueOf() {
        return this.age;
    }
}

let p = new Person("John", 23);
p.sayHello();
let p2 = new Person("Peter", 25);
p2.sayHello();

console.log(p.toString());
console.log(`Person ${p}`);
console.log(p);

console.log(p < p2); // true (23 < 25)

let p3 = new Person("Marty", 19);
let p4 = new Person("Mary", 36);

let people = [p, p2, p3, p4];
people.sort((p1, p2) => p1.age - p2.age);
console.log(people.toString());
people.sort((p1, p2) => p1.name.localeCompare(p2.name));
console.log(people.toString());