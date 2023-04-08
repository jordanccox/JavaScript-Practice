const squareList = arr => {
    //Return list of squares of only positive integers
    const newArr = arr
      .filter(element => element >= 0 && Number.isInteger(element))
      .map(element => element * element);
  
    return newArr;
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);