// Take a string (English, all-lowercase word) and turn it into pig latin

// If first letter is consonant, move first consonant(s) to the end of the word and add "ay".
// If first letter is vowel, leave first letters and add "way" to the end of the word.

// List vowels
// Check if first letter of str is vowel
// if a vowel, concatenate "way" and end.
// if not a vowel, place letter at end of the word. If still not a vowel, place letter at end of word again.

const vowels = ["a", "e", "i", "o", "u"];

function pigLatin(str) {
    let strArray = str.split("");
    let storageArray = [];
    let tempArray = [];

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[0])) {
            return str.concat("way");
        } else if (vowels.includes(str[i])) {
            break;
        } else {
            tempArray = strArray.slice(i + 1);
            storageArray.push(str[i]);
        }
    }

    return tempArray.join("").concat(storageArray.join("")).concat("ay");
}

console.log(pigLatin("katherine"));