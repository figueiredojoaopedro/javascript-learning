// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
function success (){
  return new Promise((resolve, reject) => {
    let aux = true;
    setTimeout(() => {
      if(aux){
        resolve("success");
      }
      else{
        reject("unsuccess");
      }
    },4000)
  });
}
success().then((message) => {
  console.log("It's inside of then: " + message);
}).catch((error => {
  console.log("It's i nside of catch..." + error)
}));
// #2) Run the above promise and make it console.log "success"
success().then(message => {
  console.log(message);
});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve("Success").then((message) => {
  console.log(message);
});
// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed')
Promise.reject("failed").catch(value => {
  console.log("Ooops something went wrong " + value);
});
// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the 