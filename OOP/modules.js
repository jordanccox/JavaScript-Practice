//Using Immediately Invoked Function Expression (IIFE), you can create modules -- groups of related functions

let funModule = (function () {
    return {
      singMixin: function(obj) {
        obj.sing = function() {
          return "Singing to an awesome tune";
        };
      },
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      }
    }
  })();
  
  let duck = {};
  
  funModule.isCuteMixin(duck);
  funModule.singMixin(duck);
  
  console.log(duck.isCute());
  console.log(duck.sing());