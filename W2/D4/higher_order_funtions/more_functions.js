// anonymous functions

let add = function(num1, num2){
    return num1 + num2;
}

console.log(add(10, 20));

// hoisting is when variables are able to be called before the line its declared in 

// declare named function, takes in an array and returns the sum of the total of all the numbers

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrayAdd(numbers){
    let result = 0;
    for(let number of numbersArray){
         result += number;
    }
    return result;
}

const total = arrayAdd(numbersArray);

console.log(`Total is ${total}`);

// define an anonymous function expression that takes two arguments for example name and timeOfTheDay which returns a greeting like what we did a few days ago

let greeting = function(name, timeOfDay="Day"){
    return (`Hi ${name}. Good ${timeOfDay}!`);
}

console.log(greeting(`John`, `morning`));


// arrow functions

// omits the keyword "function", function name, and "return" keyword so it can all be entered into the one line

let multiply = (num1, num2) =>num1 * num2;

console.log(multiply(10, 20));

let fullName = (firstName, lastName) => `My name is ${firstName} ${lastName}`;

console.log(fullName(`Jules`, `Ogilvie`));