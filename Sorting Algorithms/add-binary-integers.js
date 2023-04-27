// Arrays A and B store some integer in n-bits

function addBinaryIntegers(A, B) {
    let a = 0;
    let b = 0;

    // Reverse order of digits for easier conversion to decimals

    A.reverse();
    B.reverse();

    // Convert binary integers into decimal integers
    a = convertBinaryToDecimal(A);
    b = convertBinaryToDecimal(B);

    // Add decimal integers;
    let c = a + b;

    // Convert c to binary array C;
    const C = [];

    while (c > 0) {
        C.unshift(c % 2);
        c = Math.floor(c / 2);
    }
    
    return C;
}

function convertBinaryToDecimal(array) {
    let a = 0;

    for (let i = 0; i < array.length; i++) {
        a = a + (array[i] * Math.pow(2, i));
    }

    return a;
}

const binary8 = [1, 0, 0, 0];
const binary9 = [1, 0, 0, 1];
const binary44 = [1, 0, 1, 1, 0, 0];
const binary43 = [1, 0, 1, 0, 1, 1];
const binary87 = addBinaryIntegers(binary44, binary43);
const binary17 = addBinaryIntegers(binary8, binary9);
const binary34 = addBinaryIntegers(binary17, binary17).join("");
const binary96 = addBinaryIntegers(binary9, binary87);

console.log(binary34);
console.log(binary87);
console.log(binary96);