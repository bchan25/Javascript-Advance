// SCOPE

// Root Scope
var b = "Can access this";

function bb(){
    // Child Scope
    var a = "Hello";
}

// Root Scope
var changeMe = "Hi";

function change(){
    // Child Scope
    // Change Root Variable
    changeMe = "bye";
}

console.log(changeMe);

