var firstName, lastName, age,  job;

firstName = prompt("enter your first name")
lastName = prompt("enter your last name")
age = prompt("enter your age")
job = prompt("enter your profession")

// check if the user can vote

let tempAge;
let isEligiableToVote;

tempAge = parseInt(age)

isEligiableToVote = tempAge >= 18 ? true : false;

// display result
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");
console.log("Eligable to vote : " + isEligiableToVote)