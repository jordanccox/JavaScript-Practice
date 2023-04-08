function sumAll(arr) {
    let newArr = [];
    //Sort into ascending order
    arr
      .sort((a,b) => a - b);
    //Push all numbers between a, b
    let a = arr[0];
    while (newArr.length < arr[arr.length - 1] - arr[0] + 1) {
        newArr.push(a);
        a++;
    }
    //Sum all numbers in array
    return newArr.reduce((sum, currentElement) => sum + currentElement);
  }
  
  console.log(sumAll([10,5]));