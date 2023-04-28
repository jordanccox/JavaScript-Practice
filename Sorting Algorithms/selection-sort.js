function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let min = array[i];
        let j = i + 1;
        let index = i;

        while (j < array.length) {
            if (array[j] < min) {
                min = array[j];
                index = j;
            }
            j++;
        }

        let temp = array[i];
        array[i] = min;
        array[index] = temp;
    }

    return array;
}

const arr = [8, 3, 2, 1, 6, 3, 4, 9, 5, 2, 7, 11, 14, 29];

console.log(selectionSort(arr).join(" "));