// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function missingLetter(str) {
    let i = str.charCodeAt(0);

    for (let element = 0; element < str.length - 1; element++) {
        if (str.charCodeAt(element) + 1 === str.charCodeAt(element + 1)) {
            continue;
        } else if (str.charCodeAt(element) + 1 !== str.charCodeAt(element + 1)) {
            return String.fromCharCode(str.charCodeAt(element) + 1);
        } else {
            return undefined;
        }
    }
}

console.log(missingLetter("acde"));