function convertToRoman(num) {
  const romObj = {
    M: 1000,
    CM: 900, 
    D: 500, 
    CD: 400,
    C: 100, 
    XC: 90, 
    L: 50,
    XL: 40, 
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let romString = '';

  for (let key in romObj) {
    while (num >= romObj[key]) {
      romString += key;
      num -= romObj[key];
    }
  }

  return romString;
}

console.log(convertToRoman(1006));