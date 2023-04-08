function destroyer(arr) {
    let newArr =[...arr];
  
    for (let i = 1; i < arguments.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (newArr[j] === arguments[i]) {
          delete newArr[j];
        }
      }
    }
  
    return newArr.filter((element) => element);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));