"use strict";

//PART 1

// Define a function named isString that takes in a value and returns a boolean if the argument provided is a string or not.
// if type of x returns string then true

function isString(x) {
    return (typeof x) == "string"
}

// console.log(typeof x); //test input type
// console.log(isString(x));


// console.log(isString(2)); //false
// console.log(isString(true)); //false
// console.log(isString("yes")); //true


// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.


function isNotString(x) {
    return (typeof x) !== "string"
}

// console.log(typeof x); // //test input type
// console.log(isNotString(x));

// console.log(isNotString(2)); //true
// console.log(isNotString(true)); //true
// console.log(isNotString("yes")); //false


// Define a function named isNotEmptyString that takes in a value and returns a boolean if the argument provided is an empty string or not.


function isNotEmptyString(x) {
    return (typeof x == "string") && x.length > 0
}

// console.log(typeof x); // //test input type
// console.log(isNotEmptyString(x));


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

// console.log(isANumber(x));

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


// Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false. (Includes strings)

function isPositive(x) {
    var x = parseFloat(x);
    return ((x > 0)) && (typeof x == "number")
}

// console.log(isNegative(-2)); //true
// console.log(isNegative(12)); //false
// console.log(isNegative("yes")); //false
// console.log(isNegative(false)); //false
// console.log(isNegative(true)); //false
// console.log(isNegative("5")); //false


// PART 2

//define a function names addFive that takes an input and adds 5, if the input is NOT numeric the function should return false.

function addFive(x) {
    x = parseInt(x);
    x += 5;
    if (isNaN(x)) {
        return false;
    } else {
        return x;
    }
}

// console.log(addFive("2")); // 7
// console.log(addFive(5)); // 10
// console.log(addFive(true)); // false
// console.log(addFive("cat")); // false


//define a function names toTheThird that takes an input and returns that input to the third power (cubed); if the input is not numeric the function should return false

function toTheThird(x) {
    x = parseInt(x);
    if (isNaN(x)) {
        return false;
    } else {
        return x * x * x;
    }
}


// console.log(toTheThird("2")); // 8
// console.log(toTheThird(5)); // 125
// console.log(toTheThird(true)); // false
// console.log(toTheThird("cat")); // false


// Define a function named lowerCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.
// For palendromes, do it before testing for palindrome

function lowerCase(x) {
    if (!isNaN(parseInt(x))) {
        return false;
    } else if (typeof (x) === "string") {
        return x.toLowerCase();
    } else {
        return false
    }
}


// console.log(lowerCase("2")); // false
// console.log(lowerCase(5)); // false
// console.log(lowerCase(true)); // false
// console.log(lowerCase("CAT")); // CAT


// Write a function named sumOfCubes that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

function sumOfCubes(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    if (isNaN(x) || isNaN(y)) {
        return false
    } else {
        return ((x * x * x) + (y * y * y));
    }
}

// console.log(sumOfCubes("2", "5")); //8 + 125 = 133
// console.log(sumOfCubes(5, 4)); //125 + 64 = 189
// console.log(sumOfCubes(true, true)); //false
// console.log(sumOfCubes("cat", "dog")); //false


// Write a function named divide that takes in two inputs. If both inputs provided are numeric, divide returns the result of the first input multiplied by the second. If either or both inputs are not numeric, divide should return false.

function divide(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || isNaN(y)) {
        return false;
    } else if (y === 0) {
        return false;
    } else {
        return (x / y);
    }
}

// console.log(divide("12", "4")); // 12 / 4 = 3
// console.log(divide(20, 6)); // 20 / 6 = 3.33333~
// console.log(divide(true, true)); // false
// console.log(divide("cat", "dog")); //false

//hey, aren't there special rules when it comes to dividing with or by 0???

// console.log(divide(0, 12));
// console.log(divide(12, 0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// Write a function named reverseUpperCaseString that takes in a single input. If the input is a numeric string, then return false. If the input is a string, return that string capitalized and reversed
// For palendrome


function reverseUpperCaseString(x) {
    if (!isNaN(parseFloat(x))) {
        return false;
    } else if (typeof (x) !== "string") {
        return false;
    } else {
        x = (x.split("").reverse().join("")).toUpperCase();
        return x;
    }
}

//split string at every character (turn all characters into array), reverse the order in which chacracters appear, rejoin characters as a string, turn all string characters to Uppercase
//error at line 246

console.log(reverseUpperCaseString(true)); // false
console.log(reverseUpperCaseString(18)); // false
console.log(reverseUpperCaseString("15")); // false
console.log(reverseUpperCaseString("cat")); // TAC
console.log(reverseUpperCaseString("RaCeCaR")); // RACECAR
console.log(reverseUpperCaseString("yRaNoiTCId")); // DICTIONARY


// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.


function getLowestNumber(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    if (!isNaN(x) && !isNaN(y) && !isNaN(z) && typeof (x) == "number" && typeof (y) == "number" && typeof (z) == "number") {
        return Math.min(x, y, z)
    } else {
        return false
    }
}


// console.log(getLowestNumber(1, 15, 30)); // 1
// console.log(getLowestNumber(true, false, true)); // false
// console.log(getLowestNumber("1", "15", "30")); // 1
// console.log(getLowestNumber("cat", "dog", "hippopotamus")); // false
// console.log(getLowestNumber(1, "otter", 30)); // false
// console.log(getLowestNumber(-53, 72, 7)); // -53












