// By default, Constructor.prototype is a plain object — that is, 
// Object.getPrototypeOf(Constructor.prototype) === Object.prototype. 
// The only exception is Object.prototype itself, whose [[Prototype]] is null — that is, 
// Object.getPrototypeOf(Object.prototype) === null. Therefore, a typical constructor will build the following prototype chain:

function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null

function Person() {}
function Male() {}
function Boy() {}

// Since boys are males and males are persons, we should set the prototype chain to look like this:
// **some instance of Boy** --> Boy.prototype --> Male.prototype --> Person.prototype --> Object.prototype --> null

Object.setPrototypeOf(Boy.prototype, Male.prototype);
Object.setPrototypeOf(Male.prototype, Person.prototype);

const billy = new Boy();
const dave = new Male();

console.log(Object.getPrototypeOf(billy)); // Male {}
console.log(Object.getPrototypeOf(dave)); // Person {}

// Add properties to prototypes

Person.prototype.height = "70 inches";
Person.prototype.weight = "200 pounds";
Boy.prototype.weight = "85 pounds";
console.log(billy.height); // 70 inches
console.log(dave.height); // 70 inches
console.log(billy.weight); // 85 pounds
console.log(dave.weight); // 200 pounds

// Add own properties

billy.height = "60 inches";
console.log(billy.height); // 60 inches

// You may also see some legacy code using Object.create() to build the inheritance chain. 
// However, because this reassigns the prototype property and removes the constructor property, 
// it can be more error-prone, while performance gains may not be apparent if the constructors haven't 
// created any instances yet.

// Class syntax to accomplish the same thing:

class Human {
    constructor() {
        this.species = "homosapiens";
    }
}
class Woman extends Human {
    getGender() {
        return this.gender = "female";
    }
}

const susan = new Woman();
// susan ---> Woman.prototype ---> Human.prototype ---> Object.prototype ---> null

console.log(susan.species); // homosapiens
console.log(susan.getGender()); // female
console.log(susan.gender); // female -- first getGender must be called in order to work
console.log(susan); // Woman { species: 'homosapiens', gender: 'female' }