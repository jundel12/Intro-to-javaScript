"use strict";

//arithmetic operators functions
class Calculator {

    constructor() {
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}
//execute the operations that defined in the class
const calculator = new Calculator();

//execute the loop (do-while loop)
do {

    //input the first number
    let x = parseFloat(prompt("Enter the first number"));
    if (isNaN(x)) {
        alert("Please enter a valid number for the first input.");
        continue;
    }
    //input a second number
    let y = parseFloat(prompt("Enter the second number"));
    if (isNaN(y)) {
        alert("Please enter a valid number for the second input.");
        continue;
    }
    //input the operator
    let operator = prompt("Choose an operator: +, -, *, /");

    //execute the operator
    switch (operator) {
        case "+":
            alert("Result: " + calculator.add(x, y));
            break;
        case "-":
            alert("Result: " + calculator.subtract(x, y));
            break;
        case "*":
            alert("Result: " + calculator.multiply(x, y));
            break;
        case "/":
            if (y !== 0) {
                alert("Result: " + calculator.divide(x, y));
            } else {
                alert("Error: Cannot divide by zero.");
            }
            break;
        default:
            alert("Invalid operator. Please choose +, -, *, or /.");
            break;
    }

    // Prompt to continue or exit the loop
    let repeat = prompt("Do you want to use the calculator again? Type YES to continue or NO to exit.");
    if (!(repeat && repeat.toLowerCase() === "yes")) {
        break; //exit the loop
    }


} while (true);

document.getElementById("thankyou").innerHTML = "THANK YOU!!!!!!!!";
