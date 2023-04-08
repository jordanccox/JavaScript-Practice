//Mixins allow you to give unrelated objects the same methods:

let bird = {
    name: "Tweetie",
    numLegs: 2
};

let plane = {
    model: 747,
    passengers: 514
};

let flyMixin = function(obj) {
    obj.fly = function() {
        return "I'm flying";
    }
};

// Pass objects into mixin to assign the fly function to each of them:

flyMixin(bird);
flyMixin(plane);

console.log(bird.fly());
console.log(plane.fly());