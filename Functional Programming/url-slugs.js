// Function that changes title case words with spaces between to URL Slugs without using replace() or trim()
function urlSlug(title) {
    return title
      .toLowerCase()
      .split(" ")
      .filter((element) => element)
      .join("-");
  }
  
  console.log(urlSlug(" Winter is Coming "));