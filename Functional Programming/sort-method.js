function alphabeticalOrder(arr) {
    arr.sort(function(a,b) {
      return a === b ? 0: a > b ? 1: -1;
    });
    return arr;
  }
  
  let x = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  
  console.log(x);