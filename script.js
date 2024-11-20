// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function range(start, end) {    // function creating an array containing all numbers from start to end
    let array = [];     // creates empty array to store the numbers
    for (let i = start; i <= end; i++) {  // loop from start to end 
        array.push(i);     // adds each number to the array 
    }
    return array;   // return the array of numbers
}
// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55
function sum(array) { // function that takes an array of numbers and returns the sum 
    let total = 0;     // set a variable to store the total sum
    for (let number of array) {   // loop through each number in the array 
        total += number;        // add the current number to the total 
    }
    return total;          // return the total sum 
}

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
function reverseArray(array) {    // function that takes an array as input and produces a new array with elements in reverse mode
    let reversed = [];               // create empty array to store the reversed  elements
    for (let i = array.length - 1; i >= 0; i--) {   // loop through the original array in reverse
        reversed.push(array[i]);   // add the current element to the revered array 
    }
    return reversed;   // return the new reversed array
}
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
function reverseArrayInPlace(array) {      // modifies the original array by reversing the order of it elements
    for (let i = 0; i < Math.floor(array.length / 2); i++) {  // loop until the middle of the array 
        // swap the element at i with the one at the end 
        let temp = array[i]; // save the current element
        array[i] = array[array.length - 1 - i]; // move the end element to the current spot 
        array[array.length - 1 - i] = temp;       // put the saved element at the end 
    } 
}


// Function Examples
console.log(range(1, 10)); 
console.log(sum(range(1, 10))); 
console.log(reverseArray(["A", "B", "C"])); 

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); 