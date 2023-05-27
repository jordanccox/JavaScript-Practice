// Create objects with syntax constructs

const obj = { a: 1, b: 2, c: 3, __proto__: { b: 4 } };

// obj --> { b: 4 } --> Object.prototype --> null

const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(arr)); // Array.prototype

console.log(arr.toString()); // 1,2,3 -- This works because toString() is a property of Array.prototype

// arr --> Array.prototype --> Object.prototype --> null

const fn = function () {
    return 1;
};

console.log(fn.__proto__);

// fn --> Function.prototype --> Object.prototype --> null

// With constructor functions

function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype.addVertex = function (v) {
    this.vertices.push(v);
};

const g = new Graph();

g.addVertex(4);

console.log(g.vertices); // 4

console.log(g.__proto__); // { addVertex: [Function (anonymous)] }

// Object.create([[Prototype]])

const a = { a: 1 };
// a --> Object.prototype --> null

const b = Object.create(a);

console.log(b.__proto__); // { a: 1 }

// b --> a --> Object.prototype --> null

const c = Object.create(b);

console.log(c.a); // 1, inherited from a

// c --> b --> a --> Object.prototype --> null

console.log(c.hasOwnProperty); // [Function: hasOwnProperty] from Object.prototype