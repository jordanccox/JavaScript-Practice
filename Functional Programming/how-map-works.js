Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    /*for (let i = 0; i < this.length; i++) {
      newArray[i] = callback(this[i], i, this);
    }*/

    this.forEach((element, index, originalArray) => (
        newArray.push(callback(element, index, originalArray))
    ));
    // Only change code above this line
    return newArray;
  };
  
  console.log(["naomi", "quincy", "camperbot"].myMap(item => item.toUpperCase()));