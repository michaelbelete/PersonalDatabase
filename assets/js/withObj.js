let personProfile = {
    firstName: '',
    lastName: '',
    birthYear: '',
    weight: '',
    height: '',
    familyMembers: new Array(),
    ageCalc: function(){
        return new Date().getFullYear() - this.birthYear;
    },
    checkVote: function(){
        return this.age >= 18 ? true : false;
    },
    calcBmi: function () {
        this.bmi = this.weight / (Math.pow(this.height, 2)).toFixed(1)
        if (this.bmi < 18.5) {
            return "your BMI is " + this.bmi + " and you are underweight"
        } else if (this.bmi > 18.5 || this.bmi < 24.9) {
            return "your BMI is " + this.bmi + " and you are normal or healthy weight"
        } else if (this.bmi > 25.0 || this.bmi < 29.9) {
            return "your BMI is " + this.bmi + " and you are Over Weight"
        } else {
            return "your BMI is " + this.bmi + " and you are Obese"
        }
    },
    bmi: 

// Receive the values from input and assign to object properties
personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");

let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}

// call age and check vote fun
personProfile.ageCalc();
personProfile.checkVote();
personProfile.calcBmi()
console.log(personProfile)
// Adding Self Invoking Function Expression 
// (function() {
//     console.log("**************************************************************")
//     console.log("Here is your Profile ")
//     console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
//     console.log("Profession : " + personProfile.job);
//     console.log("Age : " + personProfile.age + " " + "years old");
//     console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
//     console.log("Family Members ");
//     //Displaying the family member with foreach
//     personProfile.familyMembers.forEach(function(member, index) {
//         console.log("Family Member  " + (index + 1) + " : " + member);
//     });
//     // call bmi calculator 
//     console.log(personalProfile['bmi'])
//     console.log("**************************************************************")
// })