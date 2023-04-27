function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];

        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }

    return array;
 }

 function decreasing(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
    
        let j = i - 1;

        while (j >= 0 && array[j] < key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }
    return array;
 }

const arr = [8, 3, 2, 1, 6, 3, 4, 9, 5, 2, 7];

console.log(insertionSort(arr));
console.log(decreasing(arr));