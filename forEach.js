// this is the for loop working
for(let i = 0; i < 10; i++){
    console.log(i)
}
// now, let me show you the for each
let object = [
    'something',
    'something',
    'something',
    'something',
    'something',
    'something',
    'something'
]
object.forEach(function(i){
    console.log(i)
})
// basically, for each element in the array, the method will call the callback function to make what is written in the function
// in other words, it is like: for each element, give make it.