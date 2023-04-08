function spinalCase(str) {
    return str
      .replace(/[^A-Za-z0-9]+/g, " ")
      .match(/[A-Z]*[a-z]*[0-9]*/g)
      .filter((element) => element)
      .join("-")
      .toLowerCase();
  }
  
  console.log(spinalCase("AllThe-40small Things"));