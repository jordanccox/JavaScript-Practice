let inventory = {
    apples: 20,
    bananas: 30,
    bread: 25,
    yogurt: 14
};

// Function to pass item being purchased and number of that item, then subtract that number from inventory total

function getInventory(scannedItem, numItems = 1) {
    inventory[scannedItem] = inventory[scannedItem] - numItems;
    if (inventory[scannedItem] <= 0) {
        return "Item is out. Restock."
    } else {
        return inventory[scannedItem];
    }
}

console.log(getInventory("apples", 32));
