function truncateString(str, num) {
    if (str.length > num) {
      str = str.slice(0,num) + "...";
    }
    return str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));