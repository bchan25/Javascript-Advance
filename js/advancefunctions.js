// Advanced Functions

const first = () => {
    const greet = 'Hi';

    const second = () => {
        alert(greet);
    }

    return second;
}

const newFunc = first();
newFunc();

/* 
How does it remember greet?

const newFunc =  const second = () => {
        alert(greet);
}

*/

// Closures
// Child scope remembers parent scope
// Above example


// Currying
// Muliple parameters one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3)(4);


// Compose 
// Put 2 functions into one function to create a third function
const compose = (f, g) => (a) => (f(g(a)));

const sum = (num) => num + 1;

compose(sum, sum)(5); // Returns 7

/* 
 sum(5) 5+1 = 6

 sum(g) g = 6 + 1 = 7
*/