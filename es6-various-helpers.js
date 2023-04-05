//foreach loop (fre)
const fruits = ['apple', 'banana', 'orange', 'grape'];

fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

//for .. in loop (fof)
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

//for .. in loop (fin)
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
};

for (const property in person) {
    console.log(`${property}: ${person[property]}`);
}

//create an anonymous function (anfn)
const anonymousFunction = () => {
    console.log('Anonymous function');
}

//creates a named function
const namedFunction = () => {
    console.log('Named function');
}













