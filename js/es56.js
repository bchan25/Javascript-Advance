// ECMAScript === Javascript
// New Features

// Babel - Allow you to use New JS features and changes js to work with all browsers

// ==============
// Let + Const Varibles
// ==============

// Value can't be change
const player = "Ben";

// Object
const obj ={
    player: 'bobby',
    experience: 50,
    powerup: false
}

// Can change a const property value
obj.powerup = true;

// Use let and not var
let experience = 100;
let powerup = false;


// ==============
// Destructuring
// ==============
const obj ={
    player: 'lucy',
    experience: 80,
    powerup: false
}

// Grab value into variable
const {player, experience} = obj2;

// ==============
// Object Properties
// ==============

const a = "Chris";
const b = true;

// If property name same
const obj3 = {
    a,
    b
}

// ==============
// Template Strings
// ==============
const name = "Lisa";

const greeting = `Hello ${name}, how are you?`;

// ==============
// Default Arguments
// ==============
function sayHello(name='Chan', age=30){
    return `Hello ${name} your ${age} years old`;
}






