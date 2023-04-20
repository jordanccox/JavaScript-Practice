// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

/* 

& --> &amp;
< --> &lt;
> --> &gt;
" --> &quot;
' --> &apos;

Create regex that searches g for all those values in a string and replaces with html entity.

*/

function convertHTML(str) {
    let newStr;
    let arr = str.split("");

    const entitiesArray = ["&", "<", ">", '"', "'"];

    const replaceObj = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    for (let i = 0; i < arr.length; i++) {
        if (entitiesArray.includes(arr[i])) {
            arr.splice(i, 1, replaceObj[arr[i]]);
        }
    }

    newStr = arr.join("");

    return newStr;
}

console.log(convertHTML("Dolce & Gabbana & 'Joe', who & is > Jim's dad at golf, who is < Tim in age"));