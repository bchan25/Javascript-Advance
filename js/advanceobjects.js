// Advanced Objects

// Primitive Types - By programming lanuage

// Reference Type - Created by the programmer

// object2 reference address to object1
const object1 = {value: 10};
const object2 = object1;

// Different address to object1
const object3 = {value: 10};

// Context vs scope
// Context where we are in object
// this keyword
const object4 = {
    a: function(){
        console.log(this);
    }
}

// Instantiation - Making copies of an Object
class Player {

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{

    constructor(name, type){
        super(name, type);

    }

    play(){
        console.log(`WEEEE I'm a ${this.type}`);
    }

}

const wizard1 = new Wizard('Ben', 'Healer');
const wizard2 = new Wizard('Chris', 'Magic');
