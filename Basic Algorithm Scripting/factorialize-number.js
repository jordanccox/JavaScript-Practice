function factorialize(num) {
    let nFactorial;
  
    if (num == 1 || num == 0) {
      return 1;
    } else if (num < 0) {
        return undefined;
    } else {
      nFactorial = num * factorialize(num-1);
    }
  
    return nFactorial;
  }
  
  console.log(factorialize(2));