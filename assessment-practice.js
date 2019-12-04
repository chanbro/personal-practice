"use strict";


// Define a function named isString that takes in a value and returns a boolean if the argument provided is a string or not.
// if type of x returns string then true

function isString(x) {
    return (typeof x) == "string"
}

console.log(typeof x); //test input type
console.log(isString(x));


// console.log(isString(2)); //false
// console.log(isString(true)); //false
// console.log(isString("yes")); //true


// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.


function isNotString(x) {
    return (typeof x) !== "string"
}

// console.log(typeof x); // //test input type
console.log(isNotString(x));

// console.log(isNotString(2)); //true
// console.log(isNotString(true)); //true
// console.log(isNotString("yes")); //false


// Define a function named isNotEmptyString that takes in a value and returns a boolean if the argument provided is an empty string or not.


function isNotEmptyString(x) {
    return (typeof x == "string") && x.length > 0
}

// console.log(typeof x); // //test input type
console.log(isNotEmptyString(x));


// console.log(isNotEmptyString(2)); //false
// console.log(isNotEmptyString(false)); //false
// console.log(isNotEmptyString(true)); //false
// console.log(isNotEmptyString("yes")); //true
// console.log(isNotEmptyString("")); //false
// console.log(isNotEmptyString("banana")); //true


// Define a function named isANumber that takes in a value and returns true if the input is a number.

function isANumber(x) {
    return (typeof x) === "number"
}

console.log(isANumber(x));

// console.log(isANumber(2)); //true
// console.log(isANumber("yes")); //false
// console.log(isANumber(false)); //false
// console.log(isANumber(true)); //false
// console.log(isANumber("5")); //false


// Define a function named isNumeric that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.


function isNumeric(x) {
    return !isNaN(parseFloat(x))
    //if is NOT not a number aka is a number, with the string removed to test string content for a number
}

isNumeric("yes");
isNumeric("5");

// console.log(isNumeric(2)); //true
// console.log(isNumeric("yes")); //false
// console.log(isNumeric(false)); //false
// console.log(isNumeric(true)); //false
// console.log(isNumeric("5")); //true


// Define a function named isTen that will return true when passed an argument of the numeric value 0, and return false for all other arguments.

function isTen(x) {
    return parseInt(x) === 10
}


// console.log(isTen(2)); //false
// console.log(isTen(12)); //false
// console.log(isTen("yes")); //false
// console.log(isTen(false)); //false
// console.log(isTen(true)); //false
// console.log(isTen("5")); //false
// console.log(isTen(10)); //true
// console.log(isTen("10")); //true


// Define a function named isMoreThanTen that accepts a number and returns true or false based on whether the input is more than ten.

function isMoreThanTen(x) {
    return x > 10
}
// console.log(isMoreThanTen(2)); //false
// console.log(isMoreThanTen(12)); //true
// console.log(isMoreThanTen("yes")); //false
// console.log(isMoreThanTen(false)); //false
// console.log(isMoreThanTen(true)); //false
// console.log(isMoreThanTen("5")); //false


// Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.


// console.log(isNegative(-2)); //true
// console.log(isNegative(12)); //false
// console.log(isNegative("yes")); //false
// console.log(isNegative(false)); //false
// console.log(isNegative(true)); //false
// console.log(isNegative("5")); //false







