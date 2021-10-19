let person = new Object();
person.age = 23;
person['name'] = "John";
person.sayHello = function() {
    console.log(`${this.name} (${this.age}) says hello!`);
}
person.sayHello();

let person2 = {
    age: 23,
    name: "John",
    sayHello() {
        console.log(`${this.name} (${this.age}) says hello!`);
    }
};

person2.sayHello();
console.log(person2 instanceof Object);
console.log(person2);