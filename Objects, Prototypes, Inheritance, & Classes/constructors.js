// Progression of optimization that leads to constructors:

// Imagine three box objects that each contain a function that returns the value in each box.

const boxes1 = [
    { value: 1, getValue() { return this.value; } },
    { value: 2, getValue() { return this.value; } },
    { value: 3, getValue() { return this.value; } },
];

// Not efficient! You are breaking the Don't Repeat Yourself (DRY) programming principle but manually retyping the same function
// three times.

const boxPrototype = {
    getValue() {
        return this.value;
    },
};

const boxes2 = [
    { value: 1, __proto__: boxPrototype },
    { value: 2, __proto__: boxPrototype },
    { value: 3, __proto__: boxPrototype },
];

// This is a little better (you're not recreating the same function three times), but you're still manually 
// binding the [[Prototype]] of each object to boxPrototype.

// This is when we would use a constructor function, which automatically sets the [[Prototype]] for every object 
// manufactured. Constructors are functions called with new.

// A constructor function
function Box(value) {
    this.value = value;
}

// Properties all boxes created from the Box() constructor will have
Box.prototype.getValue = function () {
    return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];

boxes.forEach((box) => {
    console.log(box.getValue()); // 1 2 3
})

const newBox = new Box(1);
console.log(newBox.getValue()); // 1
// Because Box.prototype references the same object as the [[Prototype]] of all instances, 
// we can change the behavior of all instances by mutating Box.prototype.

Box.prototype.getValue = function () {
    return this.value + 10;
}

console.log(newBox.getValue()) // 11

// A corollary is, re-assigning Constructor.prototype (Constructor.prototype = ...) is a bad idea

