function impartial(x, y, z) {
    return x + y + z;
  }

  const partialFn = impartial.bind(this, 1, 2);
  console.log(partialFn(10));