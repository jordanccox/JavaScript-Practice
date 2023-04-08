function titleCase(str) {
    const arr = str.split(" ");
    const capArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      capArr.push(arr[i][0].toUpperCase() + arr[i].substring(1,).toLowerCase());
    }
  
    return capArr.join(" ");
  }
  
  console.log(titleCase("I'm a LiTtlE TEA POt"));