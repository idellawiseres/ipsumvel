function replaceAtPosition(array, value, position) {
    if (position >= 0 && position < array.length) {
        array[position] = value;
    } else {
        console.log("Position is out of bounds");
    }
    return array;
}

// Example usage:
let arr = [1, 2, 3, 4];
let value = 99;
let position = 2;

let result = replaceAtPosition(arr, value, position);
console.log(result); // Output: [1, 2, 99, 4]
