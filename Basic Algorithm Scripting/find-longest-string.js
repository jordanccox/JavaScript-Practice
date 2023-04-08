function findLongestWordLength(str) {
    const arr = str.split(" ");
  
    let arrLen = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > arrLen) {
        arrLen = arr[i].length;
      }
    }
    return arrLen;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));