// how does for work?

const myNumbers = [1, 2, 3, 4, 5, 6];

/*for(const number of myNumbers){
    console.log(`This number is ${number}`);
}*/

// in forEach

// entirety of argument after forEach goes in brackets as you are passing in a function

myNumbers.forEach((number, index) => console.log(`This number is ${number} at index position ${index}`)) 

// function to return an array with elements multiplied by 2

// creates an anonymous function (function without a name). declaring function as a function allows what is in the function to be stored and the variable to be used somewhere else

const multTwo = function(numbers){
    const result = [];
    numbers.forEach((number) => {
        const multiply = number * 2;
        // push adds to the array
        result.push(multiply)
    })
    return result;
}

console.log(multTwo(myNumbers));

// Write a function called getEvens that takes an array of numbers as an argument and returns a new array that only contains the even numbers from the original array.

const getEvens = function(numbers){
    const result = [];
    numbers.forEach((number) =>{
        if(number % 2 === 0){
            result.push(number);
        }
    })
    return result;
}

console.log(getEvens(myNumbers));