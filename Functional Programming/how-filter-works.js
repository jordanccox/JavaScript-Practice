Array.prototype.myFilter = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (Boolean(callback(this[i], i, this))) {
        newArray.push(this[i]);
      }
    }
   
    return newArray;
  };
  
  let arr =[4, 3, 23, 1]
  
  console.log(arr.myFilter((element, index) => element ^ index > 2));