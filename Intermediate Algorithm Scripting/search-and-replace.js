// Search for a given word (second argument) in a string, and replace that word with the given word (third argument).
// Keep case of first character in word. I.e., if the target word for replacement is capitalized in the sentence, keep it capitalized.

// Use regex to match word for replacement (gi).
// 

function myReplace(str, before, after) {
    const regex = new RegExp(`${before}`, "gi");
    after = after.toLowerCase();

    let originalCase = str.match(regex).toString();
    
    if (originalCase[0] === originalCase[0].toUpperCase()) {
        after = after[0].toUpperCase().concat(after.substring(1));
    }

    return str.replace(regex, after);
}

console.log(myReplace("I think we should look up there", "up", "Down"));