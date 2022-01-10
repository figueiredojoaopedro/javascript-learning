//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const oneLine = (a,b) => a+b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// addToTen returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
// curriedSum = 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// add5 = 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// compose = 16

//What are the two elements of a pure function?
// Determinisc => The fact of a function being predictable is a signal of good code. It has to produce the same result given the same inputs
// No Side Effects => Functions cannot change other things that arent in their scope unless by return.