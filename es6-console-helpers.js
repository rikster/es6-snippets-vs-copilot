//console alert method console.assert(expression, object) (cas)
const a = 5;
const b = 3;

// If the expression (a < b) is false, log the message to the console
console.assert(a < b, 'Assertion failed: a is not less than b');

// Clear the console (ccl)
// console.clear();


// Count the number of times that the code in a function is called (cco)
function myFunction() {
    console.count('myFunction called');
}

myFunction(); // Output: myFunction called: 1
myFunction(); // Output: myFunction called: 2
myFunction(); // Output: myFunction called: 3

//console debug console.debug(object) (cdb)
console.debug('This is a debug message.');

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

console.debug('Debugging person object:', person);


//console dir console.dir(object) (cdi)
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

console.dir(person2);
