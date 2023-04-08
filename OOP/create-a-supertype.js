function Animal() { }
// Animal.protoype is a supertype whose properties we want its subtypes to inherit
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom";
  }
};
/*
One way to create a new instance of animal would be this: let animal = new Animal();
There are disadvantages of this way in this application, so instead we use:
let animal = Object.create(Animal.prototype); Object.create(obj) creates a new object and 
sets obj as the new object's prototype

By setting the prototype of animal to be the prototype of Animal,
you are effectively giving the animal instance the same "recipe" as any other instance of Animal.
animal instanceof Animal; returns "true"
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.
*/

function Bird(name) { 
    this.name = name;
} //Bird constructor function

Bird.prototype = Object.create(Animal.prototype); //Bird.prototype now contains the Animal.prototype properties
//By default, instances of Bird will inherit Animal's constructor. 
Bird.prototype.constructor = Bird; //Sets constructor of instances of Bird to Bird. 
//We want to add behavior unique to the subtype that sets it apart from the supertype:
Bird.prototype.fly = function () {
  return "I'm flying! Tweet tweet";
};

//Subtypes can override methods present in supertypes:
Bird.prototype.eat = function () {
  return "peck peck peck";
};

let duck = new Bird("Donald");
