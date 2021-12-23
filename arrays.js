// it's one of the to types of data structures
// so it's called array, cuz you can store many types of information in one site of your memory
// to make one array you just need:
let numbers = [1,2,3,4,5,6,7,8,9];
// how to access the numbers and print them?
// well, firstly you got to know one thing
// as an array from the maths and physics, it starts from 0.

console.log("A primeira casa vale: " + numbers[8]);

// how to remove the first element of the array?
console.log(numbers.shift()) //also you have to know that shift method returns undefined when the array is empty 
// how to remove the last element in the array?
console.log(numbers.pop()) //just use it, the pop() method. You ought to know that if the array is empty, it returns undefined
// to add a new element in the last position of the array, you just got to use the push method
console.log(numbers.push(12)) // it appends a new element and also returns the lenght of the new array. As a parameter, you could put the element that will be added
// how to add more than one number in the end of the array?
console.log(numbers.concat(15,100))// simple, just use .concat() from concatenate to add whatever u want
// how to sort the array? Simple, use the .sort() method
console.log(numbers.sort()) // notice that the sort will just sort the original array, so if you wanted to sort the last one with that concat stuff, you had to store that in a variable.
// the lenght method, it's used to know how long is the array, like if it have 9 index or even 90 index
console.log(numbers.length) // it'll return the length as the name says