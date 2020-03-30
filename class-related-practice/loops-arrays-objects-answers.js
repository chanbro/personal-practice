// TODO Answer 1

/*function sum (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum+= numbers[i];
    }
    return sum;
}*/

/*function sum(numbers) {
    let i = 0;
    let sum = 0;
    while (i < numbers.length) {
        sum+= numbers[i];
        i++;
    }
    return sum;
}*/

// TODO Answer 2

/*function noSpace(x){
    let xArray = x.split("");
    let returnArray = [];
    console.log(xArray);
    for (let i = 0; i < xArray.length; i++) {
        // check to see if each index is equal to empty space, if it isn't then we can push to the return array.
        if (xArray[i] !== " ") {
            returnArray.push(xArray[i]);
        }
    }
    return returnArray.join("");
}*/


/*function noSpace(x) {
    return x.split(" ").join("");
}*/


/*function noSpace(x){
    return x.replace(/ /g, '');
}*/

// TODO Answer 3

function switcher(x) {
    var alphabet = " ?!abcdefghijklmnopqrstuvwxyz ";
    var reverseAlphabetArray = alphabet.split("").reverse();
    var returnString = "";
    console.log(reverseAlphabetArray);

    // Loop through array. Each argument passed in will be used as 'positionInput' for the reverseAlphabetArray
    // x.forEach(function(positionInput) {
    //     returnString += reverseAlphabetArray[positionInput];
    // });

    //for loop
    for (var i = 1; i < x.length; i++) {
        console.log("position is currently: " + x[i]);
        returnString += reverseAlphabetArray[x[i]];
    }
    //x[i] is the index of the passed in argument
    return returnString;
}

// TODO Answer 4

/*function changeEnough(change, amountDue) {
    let totalChange;
    totalChange = (change[0] * .25) + (change[1] * .10) + (change[2] * .05) + (change[3] * .01);
    return (totalChange >= amountDue);
}*/

// TODO Answer 5
//objects: width, height, length; console.log key value pairs to show if function works

/*function volumeOfBox(sizes) {
    return sizes.width * sizes.height * sizes.length;
    // return sizes["width"] * sizes["height"] * sizes{"length"];
}*/

// TODO Answer 6
// REMEMBER THAT OBJECTS HAVE METHODS TOO
/*function keysAndValues(obj) {
    var keys = Object.keys(obj);
    var values = Object.values(obj);

    return [keys, values];
}*/

// TODO Answer 7

/*let oldest = function(people) {
    var oldestAge = 0;
    var oldestAgeName = "";
    var nameArray = Object.keys(people);
    var ageArray = Object.values(people);

    for (var i = 0; i < ageArray.length; i++) {
        if (ageArray[i] > oldestAge) {
            oldestAge = ageArray[i]; //storing current oldest age in variable
            oldestAgeName = nameArray[i];
        }
    }
    return oldestAgeName;
};*/

// TODO Answer 8
/*function longestStreak(arr) {
    let milliSecsInDay = 86400000;
    let difference;
    let currentDate;
    let previousDate;
    let consecutiveDays = 1;
    let maxConsecutiveDays = 1;

    // Returns 0, if an empty array is passed
    if (arr.toString() === "") {
        return 0;
    }

    for (let i = 1; i < arr.length; i++) {
        //Converts the strings into actual date objects. The return is in milliseconds.
        currentDate = Date.parse(arr[i].date);
        previousDate = Date.parse(arr[i - 1].date);
        difference = (currentDate - previousDate) / milliSecsInDay;

        if (difference !== 1) {
            // If the difference isn't 1, the consecutive days have ended. Reset consecutiveDays back to 1.
            consecutiveDays = 1;
        } else if (difference === 1) {
            // If it is 1, then we can increment and track the max consecutiveDays.
            consecutiveDays++;
            if (consecutiveDays > maxConsecutiveDays) {
                maxConsecutiveDays = consecutiveDays;
            }
        }
    }
    return maxConsecutiveDays;
}*/

