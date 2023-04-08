function largestOfFour(arr) {
  const maxNumsArr = [];
  let largestNum;

  for (let i = 0; i < arr.length; i++) {
    largestNum = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {

      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    maxNumsArr.push(largestNum);
  }
  return maxNumsArr;
}

console.log(largestOfFour([[4, 5, 8, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-1000, -1001, -857, -1]]));