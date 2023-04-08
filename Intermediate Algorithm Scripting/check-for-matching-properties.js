function whatIsInAName(collection, source) {
    let arr = [...collection]
  
    for (let i = 0; i < collection.length; i++) {
      for (let key in source) {
        if (!(key in collection[i]) || source[key] !== collection[i][key]) {
          delete arr[i];
        }
      }
    }
    
    return arr.flat();
  
  }
  let x = whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
  
  console.log(x);