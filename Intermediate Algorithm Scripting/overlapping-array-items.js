let arr1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
let arr2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];
let arr3 = ['a', 'b', 'b', 'b', 'b', 'g', 'g'];

function overlapping(arrA, arrB) {
    const a = [...arrA];
    const b = [...arrB];

    const newArr = [];
    a.forEach((element) => {
        if (b.includes(element)) {
            newArr.push(element);
            b.splice(b.indexOf(element),1);
        }
    });
    
    return newArr;
}

console.log(overlapping(arr3, arr2));