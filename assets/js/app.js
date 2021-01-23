//exercise - calculating BMI
const calcBmi = function (weight, height) {
    const bmi = weight / (Math.pow(height, 2)).toFixed(1)
    
    if (bmi < 18.5) {
        return "your BMI is " + bmi + " and you are underweight"
    } else if (bmi > 18.5 || bmi < 24.9) {
        return "your BMI is " + bmi + " and you are normal or healthy weight"
    } else if (bmi > 25.0 || bmi < 29.9) {
        return "your BMI is " + bmi + " and you are Over Weight"
    } else {
        return "your BMI is " + bmi + " and you are Obese"
    }
}

let weight = parseFloat(prompt("Your Weight is(kg): "))
let height = parseFloat(prompt("Your height is(m): "))

console.log(calcBmi(weight, height))
// working with function

// var birthYear;     
// //Some changes
// birthYear = prompt("Enter Your Birth Year");

// let tempAge = ageCalc(birthYear);

// console.log("Age : " + tempAge + " " + "years old");

// //age calculator function
// function ageCalc(birthYear)
// {
//     return new Date().getFullYear() - birthYear;
// }

// //working with loops

// let familyMembers = new Array()

// let numOfFamilyMembers = parseInt(prompt('enter number of family memebers'));

// for(let i = 0; i < numOfFamilyMembers; i++){
//     familyMembers[i] = prompt(`your family member number ${i+1}`)
// }

// console.log(familyMembers)

// familyMembers.forEach(function(member){
//     console.log(`your family members ${member}`)
// })

// // working with input and output
// var firstName, lastName, age,  job;

// firstName = prompt("enter your first name")
// lastName = prompt("enter your last name")
// age = prompt("enter your age")
// job = prompt("enter your profession")

// // check if the user can vote

// let tempAge;
// let isEligiableToVote;

// tempAge = parseInt(age)

// isEligiableToVote = tempAge >= 18 ? true : false;

// // display result
// console.log("Here is your Profile ")
// console.log("Full Name: " + firstName + " "+lastName);
// console.log("Profession : " + job);
// console.log("Age : " + age + " " + "years old");
// console.log("Eligable to vote : " + isEligiableToVote )