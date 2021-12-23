let users = [
    { 
        username: "john",
        password: "1234"
    },
    { 
        username: "Elvira",
        password: "1234"
    },
    { 
        username: "comi a dilma",
        password: "1234"
    }
]
let timeline = [
    {
        user: 'Elvira',
        timeline: 'Well, i hope this course helps me get an employment'
    },
    {
        user: 'John',
        timeline: 'Dude, i do need to improve my english, i dont know what is happening'
    },
    {
        user: 'comi a dilma',
        timeline: 'Dilma isnt the most hot woman'
    }
]

let loginUsername = prompt("Please, type your username: ")
let loginPassword = prompt("Please, could you type the password: ")

function authenticating(userL, passL){
    for (let i = 0; i < users.length; i++){
        if (loginUsername === users[i].username && loginPassword === users[i].password){
            return true
        }
    }
    return false
}
function throwingTheContent() {
    if (authenticating(loginUsername,loginPassword) === true){
        console.log(timeline)
    }
    else{
        console.log("Sorry, i didn't recognize you in our databases :(")
    }
}
throwingTheContent()