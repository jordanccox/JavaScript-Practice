function quickSort(array, startIndex, endIndex) {
    if (endIndex <= startIndex) {
        return;
    }
    
    let pivot = partition(array, startIndex, endIndex);

    quickSort(array, startIndex, pivot - 1);
    quickSort(array, pivot + 1, endIndex);
}

function partition(array, startIndex, endIndex) {
    let pivot = array[endIndex];
    let i = startIndex - 1;
    let temp;

    for (let j = startIndex; j <= endIndex - 1; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }

    i++;
    swap(array, i, endIndex);
    return i;
}

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;

    return array;
}

let array = [10, 8, 9, 6, 3, 15, 10, 7, 12, 16, 17, 6, 12, 12, 12,  5,  8, 12, 7, 13];

let startIndex = 0;
let endIndex = array.length - 1;

quickSort(array, startIndex, endIndex);

console.log(array);

