// Avanced Arrays

// ForEach 
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
   double.push(num * 2); 
})

// Loops
// map, filter, reduce

// Needs to return because mapArray is a new array
const mapArray = array.map((num) => {
    return num * 2;
})

// Create an array based on condition
const filterArray = array.filter(num => {
    return num > 5
})

// Accumulator = 0 starting number
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)
