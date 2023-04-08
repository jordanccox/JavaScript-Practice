function convertToRoman(num) {

	let lenOfNum = num.toString().length;
	let numArray = [];
	let multiplier = 10;

	// Divide number into components of base 10:

	for (let i = 0; i < lenOfNum; i++) {
		numArray.push(num % multiplier);
		num -= numArray[i];
		multiplier *= 10;
	}

	numArray.reverse();

	// Add code to reverse order of numArray

	// Assign Roman numeral value to number:

	let romObj = {
		1000: "M",
		900: "CM", 
		500: "D", 
		400: "CD",
		100: "C", 
		90: "XC", 
		50: "L",
		40: "XL", 
		10: "X",
		9: "IX",
		5: "V",
		4: "IV",
		1: "I"
	};
	let romString = "";

	for (let j = 0; j < lenOfNum; j++) {
		
		let numStr = numArray[j].toString();
		let numLen = numStr.length;
		let dig = numStr[0];

		if (dig < 4) {
			romString += romObj[Math.pow(10,numLen-1)].repeat(dig);
		} else if (dig > 5 && dig < 9) { // add else if num > 5 and num < 9
			let remainder = dig % 5;
			romString += romObj[5 * Math.pow(10,numLen-1)]+ romObj[Math.pow(10, numLen-1)].repeat(remainder); 
		} else {
			romString += romObj[numArray[j]];
		}
	}
  
	return romString;

}
console.log(convertToRoman(1006));
console.log(5%5);

//It works! still kinda ugly though.