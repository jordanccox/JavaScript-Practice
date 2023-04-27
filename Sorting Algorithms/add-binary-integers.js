// Arrays A and B store some integer in n-bits

function addBinaryIntegers(A, B, n) {
    let a = 0;
    let b = 0;

    // Reverse order of digits for easier conversion to decimals

    A.reverse();
    B.reverse();

    // Convert binary integers into decimal integers
    for (let i = 0; i < n; i++) {
        a = a + (A[i] * Math.pow(2, i));
        b = b + (B[i] * Math.pow(2, i));
    }

    // Add decimal integers;
    let c = a + b;

    // Convert c to binary array C;
    const C = [];

    for (let i = 0; i <= n; i++) {
        C[n - i] = c % 2;
        c = Math.floor(c / 2);
    }
    
    return C;
}

const binary8 = [1, 0, 0, 0];
const binary9 = [1, 0, 0, 1];

const binary17 = addBinaryIntegers(binary8
    , binary9, 4);

const binary34 = addBinaryIntegers(binary17, binary17, 5);

console.log(binary17);