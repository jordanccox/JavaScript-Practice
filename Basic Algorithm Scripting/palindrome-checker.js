function palindrome(str) {

  const noSpaces = str.replaceAll(" ", "").toString().toUpperCase().replace(/[^a-zA-Z0-9 ]/g, '');
  const palArr = [];

  for (let i = 0; i < noSpaces.length; i++) {
    let charI = noSpaces.charCodeAt(i);

    if (parseInt(noSpaces[i]) == noSpaces[i]) {
      palArr[noSpaces.length - 1 - i] = noSpaces[i];
    } else if (charI >= 65 && charI <= 91) {
      palArr[noSpaces.length - 1 - i] = noSpaces[i];
    } 
  }

  const palStr = palArr.join("");

  return palStr == noSpaces;
}

palindrome("eye");

console.log(palindrome("222@!!"));
