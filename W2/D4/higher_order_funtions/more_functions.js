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

/* Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.
Hint: If you get stuck, start by writing the function using a for of loop, then refactor, replacing the for loop with the forEach.*/

const sumElements = function(numbers){
    let total = 0;
    // banana shows that the names are more for semantic reasons. They only take the variable given and do not need to call on specific variables so don't need to match the names for other variables outside of the function they are used in
    numbers.forEach((banana) => total += banana);
    return total;
}
console.log(sumElements(numbersArray));

//map returns an array

const multiplyByTwo = function(numbers){
    const result = numbers.map((number) => number * 2)
    return result;
}
console.log(multiplyByTwo(numbersArray));

// filter to get even numbers

const getEvens = function(numbers){
    const result = numbers.filter((number)=>number % 2 ===0);
    return result;
}

console.log(getEvens(numbersArray));

// reduce to sum all elements in an array

const addElements = function(numbers){
    // adding ,0 after number in the arrow function specifies a number you want the counting to start at so if it is zero all the numbers in an array will add together normally but if the value is 20 it'll add an additional 20 to the original value, in this case, turning the original total of 45 into 65
    let total = numbers.reduce((runningTotal, number)=> runningTotal + number, 20);
    return total;
}

console.log(addElements(numbersArray));