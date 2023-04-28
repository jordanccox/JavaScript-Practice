// Given input num, sumFib returns the sum of all odd fibonacci numbers less than or equal to given num

function sumFib(num) {
    let sum = 1;
    const fibSequence = [0, 1];

    for (let i = 0; i < num; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];

        if (fibSequence[i] % 2 != 0 && fibSequence[i] <= num) {
            console.log(fibSequence[i]);
            sum += fibSequence[i];
        }
    }

    return sum;
}

console.log(sumFib(4));