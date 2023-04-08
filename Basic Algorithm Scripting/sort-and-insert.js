function getIndexToIns(arr, num) {
    /*function compareNumbers(a, b) { 
      return a - b;
    }*/
    
    arr.sort((a, b) => a - b); //This does the same as compareNumbers but it is with arrow function notation
    let localArr = [...arr];

    if (arr.length == 0) localArr.push(num);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num && arr[i + 1] > num || arr[i] === num || arr[i] == arr[arr.length - 1] && arr[i] < num) {
            localArr.splice(i + 1, 0, num);
        } 
    }

    return localArr.indexOf(num);  
  }
  
  console.log(getIndexToIns([], 50));