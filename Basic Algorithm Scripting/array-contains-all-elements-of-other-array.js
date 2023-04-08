// Takes an array with two strings. If all the letters of the second string are contained by the first, returns true. Else, returns false.

function mutation(arr) {
    let firstLetters = arr[0].toString().toLowerCase().split("");
    let secondLetters = arr[1].toString().toLowerCase().split("");
  
   const obj = {};
  
   for (let element of firstLetters) {
     obj[element] = firstLetters[element];
   }
  
   for (let i = 0; i < secondLetters.length; i++) {
     if (!obj.hasOwnProperty(secondLetters[i])) {
       return false;
     }
   }
  
   return true;
  
  }
  
  console.log(mutation(["aliEn", "lia"]));