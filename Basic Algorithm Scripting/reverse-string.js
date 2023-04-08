function reverseString(str) {
    const revArr = str.split("").reverse();
    return revArr.join("");
  }
  
  console.log(reverseString("hello"));