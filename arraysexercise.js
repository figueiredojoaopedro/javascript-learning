let array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove banana
console.log(array.shift()) // banana will be removed
// 2. Sort the array in order
console.log(array.sort()) // the sort method will sort the array in an alphabetic way or ascending one
// notice that for numbers you should use a callback function to work correctly
// 3. Put Kiwi at the end of the array
console.log(array.push("Kiwi")) // i think it will work right. And about the psuh method, it appends a new element at the end of the array
console.log(array)
// 4. remove apples from the array
console.log(array.splice(0,1)) // one of the ways to delete an element in the array
// it returns the element that was removed
// 5. sort the array in the opposite way
console.log(array.reverse())