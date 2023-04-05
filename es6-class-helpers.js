class Person {
    //con
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name (get)
    get name() {
        return this._name;
    }

    // Setter for name (pse)
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string.');
        }
        this._name = value;
    }

    // Getter for age (get)
    get age() {
        return this._age;
    }

    // Setter for age (pse)
    set age(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('Age must be a positive number.');
        }
        this._age = value;
    }
}

// Usage:
const person = new Person('John Doe', 30);
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30

person.name = 'Jane Doe';
person.age = 28;
console.log(person.name); // Output: Jane Doe
console.log(person.age); // Output: 28

