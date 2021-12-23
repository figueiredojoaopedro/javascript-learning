const powerTheCar = function(age){
    if (age < 18)
        return "You are too young for this!";
    else if (age === 18)
        return "Enjoy your first year driving!";
    else
        return "Powering on the car, drive safe!";
}
let age = 8;
console.log(powerTheCar(age))
