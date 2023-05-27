// Inherited functions (methods) act like any other inherited property (including property shadowing).
// this keyword refers to the inheriting object.

const parent = {
    value: 1,
    addValue() {
        this.value++;
        return this.value;
    }
}

console.log(parent.addValue()); // 2
// this referes to parent in this case

const child = {
    __proto__: parent
}

console.log(child.addValue()); // 3 -- parent's value was changed to 2 when addValue was called, so the value that child inherited was 2.
console.log(child.value); // 3
console.log(parent.value); // Still 2

// When child.addValue is called, 'this' refers to child.
// So when child inherits the method of parent,
// the property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

// Assign an own property of 'value' to child:

child.value = 100;

console.log(child.addValue()); // 101

// Since child now has the 'value' property, 'this.value' means
// child.value instead