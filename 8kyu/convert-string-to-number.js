// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


//Mine
const stringToNumber1 = function(str){
    return Number(str);
}

//Another 
const stringToNumber2 = str => Number(str)


//Best
var stringToNumber3 = function(str){
    return parseInt(str);
}