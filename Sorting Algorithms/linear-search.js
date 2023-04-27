function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }

    return null;
}

const arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 4, 25, 26, 27, 28, 29, 30];

console.log(linearSearch(arr, 140));

/* 
Loop invariant: At the start of each iteration of the for loop, array[0:i-1] does not contain the value.

*/