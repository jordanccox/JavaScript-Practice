// Function to remove falsy values (false, undefined, "", NaN, null)

function bouncer(arr) {
    let localArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        localArr.push(arr[i])
      } 
    }
    return localArr; // Removes blank array elements
  }
  
  console.log(bouncer([7, "ate", "", false, null, undefined, NaN, 9]));

  // Even easier solution:

  function bouncer2(arr) {
    return arr.filter(Boolean); //Returns only truthy elements
  }

  console.log(bouncer2([7, "ate", "", false, null, undefined, NaN, 9]));