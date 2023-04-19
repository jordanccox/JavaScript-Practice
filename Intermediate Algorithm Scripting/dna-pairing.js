// AT and GC are the DNA pairs

// The DNA strand is missing the pairing element. 
// Write a function to match the missing base pairs for the provided DNA strand. 
// For each character in the provided string, find the base pair character. 
// Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// Iterate over str
// for each element, add to array alongside matching pair

function pairElement(str) {

    let array = [];

    for (let element of str) {
        switch(element) {
            case "G":
                array.push(["G", "C"]);
                break;
            case "C":
                array.push(["C", "G"]);
                break;
            case "A":
                array.push(["A", "T"]);
                break;
            case "T":
                array.push(["T", "A"]);
                break;
        }
    }

    return array;
  }
  
  console.log(pairElement("GCG"));