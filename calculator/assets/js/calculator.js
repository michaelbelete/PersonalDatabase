function add(numArray) {
    let result = 0
    numArray.forEach(num => {
        result += num
    });

    return result
}

function mult(numArray) {
    let result = 1
    numArray.forEach(num => {
        result = result * num
    });
    return result
}


function sub(a, b) {
    return a - b
}

function div(a, b) {
    if (b == 0) {
        return 'Oops, can\'t divide by zero'
    } else {
        return a / b
    }
}

(function () {
    while (true) {
        choice = parseInt(prompt("Choose operation: 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division"))

        if (choice === 1) {
            let numArray = new Array()
            let numberOfInputs = parseInt(prompt("please enter how much number you want to add: "))

            for (let i = 0; i < numberOfInputs; i++) {
                numArray[i] = parseInt(prompt(`please enter ${i + 1} number`))
            }
            console.log(add(numArray))
        } else if (choice === 2) {
            let num1 = parseInt(prompt("please enter the first number: "))
            let num2 = parseInt(prompt("please enter the second number: "))

            console.log(sub(num1, num2))
        } else if (choice === 3) {
            let numArray = new Array()
            let numberOfInputs = parseInt(prompt("please enter how much number you want to multiply: "))

            for (let i = 0; i < numberOfInputs; i++) {
                numArray[i] = parseInt(prompt(`please enter ${i + 1} number`))
            }
            console.log(mult(numArray))
        } else if (choice === 4) {
            let num1 = parseInt(prompt("please enter the first number: "))
            let num2 = parseInt(prompt("please enter the second number: "))

            console.log(div(num1, num2))
        }
    }

}());