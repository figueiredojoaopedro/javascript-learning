// what is objects?
// basically a collection of properties
// so, let me give you an example
let person = {
    name: "John",
    age: 34,
    gender: "male",
    job: "Entrepeneur",
    isMarried: false
}
// how can i grab these properties?
// easy, just write objname.property
console.log(person.name + " " + person.age + " " + person.gender + " " + person.job + " " + person.isMarried)
// you can add a new property using this method
person.country = "Brazil"
// you can also change the value by the same way
person.isMarried = true
console.log(person)

// What is a method?
// Method are functions inside an object
console.log(person.name)