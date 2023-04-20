// Write a function that takes two or more arrays and returns a 
// new array of unique values in the order of the original provided arrays.

// iterate through each subarray
// when you come upon unique value, push it to new array
// check for uniqueness with .includes()

function uniteUnique(...args) {
    let newArray = [];
    let subArray;

    for (let i = 0; i < args.length; i++) {
        subArray = args[i];
        for (let j = 0; j < subArray.length; j++) {
            if (!newArray.includes(subArray[j])) {
                newArray.push(subArray[j]);
            }
        }
    }
    
    return newArray;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));