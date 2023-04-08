function chunkArrayInGroups(arr, size) {
   // let localArr = [...arr]
    let subArrays = [];
    
  /*  for (let i = 0; i < localArr.length; i++) {
      if (arr.length != 0) {
        subArrays[i] = arr.splice(0, size);
      }
    } */

    for (let i in arr) { //Simpler solution than above code
        subArrays[i] = arr.splice(0, size);
    }
    
    return subArrays;
  }
  
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5,6,7,8,9,10,11], 4));