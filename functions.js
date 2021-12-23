// we got many ways to make a function
// the first of all is:
function askForWater(){
    console.log("Please, can you give me a glass of water?!");
}
askForWater()
// the second way is:
// notice that the function is stored inside of a variable and this is called anonymous function
let askForFood = function(){
    console.log("Please, can you give me some food?!")
}
askForFood()
// the third one is mostly used as an argument, or as a jargon called callback
// the arrow functions:
let goToSleep = () => console.log("Lying on the bed!")
goToSleep()