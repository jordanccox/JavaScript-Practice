function confirmEnding(str, target) {
    return str.substring(str.length - target.length, str.length).toUpperCase() == target.toUpperCase();
} 
  
console.log(confirmEnding("Bookmark", "ARk"));