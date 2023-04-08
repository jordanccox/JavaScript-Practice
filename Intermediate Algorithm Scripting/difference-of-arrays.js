function diffArray(arr1, arr2) {
    let newArr = [];
  
    function compare(a,b) {
      return newArr.push(a.filter(element => b.indexOf(element) === -1));
    }
  
    compare(arr1, arr2);
    compare(arr2, arr1);
  
    return newArr.flat();
  }
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "pink wool","dead shrub"], ["diorite", "andesite", "grass", "grass", "dirt", "dead shrub"]));