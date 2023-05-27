const dog = {
    fur: "Yes",
    ears: 2,
    __proto__: {
        kingdom: "animal",
        domesticated: "Yes"
    }
}

// Prototype Chaining:

// When an object is created, it is given a prototype object that it can inherit properties and methods from.
// Each object has therefore has two types of properties: own properties (defined on the object itself) and prototype properties
// (defined on the object's prototype object).
// The prototype object can be accessed via an object's __proto__ property.

console.log(dog.fur); // JavaScript searches the object's own properties, finds the property "fur" and prints "Yes".
console.log(dog.kingdom); // JavaScript searches the object's own properties, does not find the property "kingdom", so it moves
// up the prototype chain, finds "kingdom" and logs "animal".
// dog --> __proto__ --> kingdom
console.log(dog.locatedIn); // JavaScript searches own properties, dog's [[Prototype]] object's properties, then Object.prototype's
// properties then Object.prototype's prototype object, which is null, so it prints undefined.
// dog --> __proto__ --> Object.prototype --> null
console.log(dog.__proto__); // { kingdom: 'animal', domesticated: 'Yes' }
console.log(dog.__proto__.__proto__); // [Object: null prototype] {}
console.log(dog.__proto__.__proto__.__proto__); // null

// Property Shadowing

const cat = {
    fur: "Yes",
    ears: 2,
    eyes: 2,
    universe: "ours",
    __proto__: {
        kingdom: "animal",
        ears: "sometimes",
        eyes: "sometimes",
        nose: "sometimes",
        __proto__: {
            planet: "earth",
            __proto__: {
                galaxy: "milky way",
                planet: "lots of planets",
                universe: "somewhere in the multiverse"
            }
        }
    }
}

// If an object has a property with the same name as a property on its prototype chain, the object's 
// own property "shadows" the prototype property -- i.e., it is used rather than the prototype property.

console.log(cat.universe); // ours
console.log(cat.__proto__.universe); // somewhere in the multiverse
console.log(cat.__proto__.__proto__.__proto__.universe); // somewhere in the multiverse
console.log(cat.planet); // earth