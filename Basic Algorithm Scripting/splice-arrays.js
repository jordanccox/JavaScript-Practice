function frankenSplice(arr1, arr2, n) {
    let localArr2 = [...arr2]; // This copies the contents of arr2 to localArr2 so arr2 doesn't change
    localArr2.splice(n, 0, ...arr1);
    return localArr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));