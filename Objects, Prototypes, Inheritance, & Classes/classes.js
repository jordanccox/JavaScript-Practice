// Classes are syntax sugar over constructor functions, which means you can still manipulate
// Box.prototype to change the behavior of all instances.
// Refactoring the Box constructor as a class...

class Box {
    constructor(value) {
        this.value = value;
    }

    // Methods are created on Box.prototype
    addValue(value) {
        this.value += value;
        return this.value;
    }
}

const box = new Box(50); // Assigns value of 50 to instance of Box 'box'
box.addValue(5); // Adds 5 to box.value
console.log(box.value); // 55