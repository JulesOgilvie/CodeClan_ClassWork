// functions
// block of code that takes in some input and gives relevant output

// declare a function

// function [name]([variableplaceholdername]){
//  return [variableplaceholdername] * [variableplaceholdername];
// }

/* comment end: line 143

function square(number){
    return number * number;
}

// invoking or executing or calling a function

const fiveSquared = square(5);
console.log(fiveSquared);
const threeSquared = square(3);
console.log(threeSquared);

// when to use return keyword

// declare the function named myFunc

// function [name]([variableplaceholdername]){
//  console.log([variableplaceholdername].[keyName])
// }

function myFunc(anObject){
    console.log(anObject.active);
}

const user = {
    active: true,
    username: `RedWolfe7`,
    loginAttemps:8
};

const user1 = {
    active: false,
    username: `PidgeUnTime`,
    loginAttempts:1
};

const user2 = {
    active: true,
    username: `LandyRs`,
    loginAttemps: 3
};

// calling the function

myFunc(user2);

// -------------------------------------------------

// arguments and parameters

function getUserDetails(firstName, lastName, email){
    const userDetails =`Name: ${firstName} ${lastName}, Email: ${email}`;
    return userDetails;
}

const userInfo = getUserDetails(`John`, `Doe`, `johndoe@email.com`)
console.log(userInfo);

// default parameters 

// setting values for parameters when nothing is passed into function

function getUserDetails1(firstName,lastName,email=`None Given`){
    const userDetails =`Name: ${firstName} ${lastName}, Email: ${email}`;
    return userDetails;
}

const newUserInfo = getUserDetails1(`Pete`, `p`)
console.log(newUserInfo);

// -----------------------------------------

// declare a function called "multiply" that takes an input of two numbers

function multiple(number1, number2){
    return number1 * number2;
}

// declare a function that takes in an array as an argument and returns the total value of all the items within the array

function sumArray(array){
    let total = 0

    for(let number of array){
        total += number;
    }
    return total;
}

let numbers = [2, 3, 6, 8, 10];
console.log(sumArray(numbers));

// declare a function that takes the input of a number and returns true if the array contains a number and false

function hasValue(givenNumber, array){
    // "in" returns the index of the array, "of" returns the value
    for(let number of array){
        if(number === givenNumber){
            return true;
        }
    }
    return false;
}

console.log(hasValue(3, [1, 2, 3, 4]));

// remember how an object can have anything as a value? add a function to the person object that returns a string in the format "Brendan Eich is 62 years old"

// creating an object variable with a key that runs a function
const person ={
    // creates an object as a key to store paired information
    name:{
        first: `Brendan`,
        last: `Eich`
    },
    age: 62,

    // creates a function as a key. It does not need to be named in this case
    getDetails:function(){
        return`${this.name.first} ${this.name.last} is ${this.age} years old`;
    }
};

// logs the variable and the key that calls the function
console.log(person.getDetails());

// use the correct terminology to describe the following code

// default values always have to be the last parameter in the function list
function getGreeting(userName, timeOfDay = `day`){
    return `Good ${timeOfDay}, ${userName}!`;
}

console.log(getGreeting(`Jules`, `morning`));
console.log(getGreeting(`Max`)); /*

// When a function runs (executes) it creates it's own space in memory known as the execution context.
// Outside a function, this is the `global context`.

/* If we declare variables inside a function with let, const or var, they will only
   exist while the function executes. Likewise, parameters only exist while the function executes.
   I.E. they are `function scoped`.
*/

function sherlockScope(buddyName){
    let firstName = "Sherlock";
    var lastName = "Holmes";
    const buddy = buddyName;
    
    console.log(buddyName); 
    return `${firstName} ${lastName} has a buddy called ${buddy}`;
  }

  console.log(sherlockScope("Watson")); // Sherlock Holmes has a buddy called Watson
  console.log(firstName); // ReferenceError: firstName is not defined

//   does not work here because firstName is declared within a function so does not exist globally

// to get this to work you could either declare the variable outside the function or have the function contain the console.log() 

  console.log(lastName); // ReferenceError: lastName is not defined

//   does not work here because lastName is declared within a function does not exist globally

// to get this to work you could either declare the variable outside the function or have the function contain the console.log() 


  console.log(buddy); // ReferenceError: buddy is not defined

// does not work here because buddy is declared within a function so does not exist globally

// to get this to work you could have the console.log() happen within the function. Declaring the variable outside the function WILL NOT work because variable buddyName only exists within the function

  console.log(buddyName); // ReferenceError: buddyName is not defined

//   does not work here because buddyName is a placeholder variable declared within a function so does not exist globally. Placeholder variables are also only used within functions to get data from *outside* the function. It is the data the function is working with