let emailAddress = "me@gmail.com";
let numberOfLogins = 40;

// Declare variables
// camelCasing
let myName;
let myAge;

// myName has no data so "undefine" is printed
console.log(myName);
// console.log(cohortName);

// variable obtains data after it is first printed so it still prints "undefined" first
myName = "Jules";
myAge = 21;

// prints what is now in myName after "undefined" is printed
console.log(myName);

// change or update value of a variable
emailAddress = "me123@gmail.com";

console.log(emailAddress);

// let can be changed, const cannot be changed
const animal = "wolf";
// animal = "tiger";

// data types
let foo = 42;
foo = "bar";
foo = true;

let num1 = 100;
let num2 = "20";

// if both variables aren't numbers, addition just concatenates as js thinks sets both variables to strings
console.log(num1+num2);
console.log(num1+10);

const total = 100/2*7+8-5
console.log(total);

const remainder = 10 % 2;
console.log(remainder);

let counter = 0;
// ++ adds 1 to variable
counter++;
console.log(counter);

let highScore = 10;
// += takes high score and adds number to it *= takes high score and multiplies it by input number
highScore *= 10;
console.log(highScore);

let sentence = "It's a nice day";
console.log(sentence);

let firstName = "John";
let secondName = "Doe";
fullName = firstName + " " + secondName;
console.log(fullName);
// using template strings. Cannot be done within the print function
fullName = `${firstName} ${secondName}`;
console.log(fullName);

// uses .length property to show how long variable is
console.log(firstName.length);

// properties do not require brackets to work
console.log("Dogs are cute".length);

// methods require brackets to work
console.log(firstName.toUpperCase());

// checks if isLiked is true
let isLiked = true;
if(isLiked){
    console.log("Someone liked your picture");
}

// isLiked does not print because the value is false
isLiked = false;
if(isLiked){
    console.log("Someone liked your picture");
}

// arrays are declared using square brackets []
let favourites = ["Star Wars", "Pinocchio", "Shrek", "The Goonies"];
console.log(favourites);

// object declared using {} with items listed in-between
let dog = {
    // each item must be followed by a comma to work
    name:"Caesar",
    breed:"Staffy",
    favFood:['carrots', 'chicken', 'prawn crackers']
};
console.log(dog);
// name.item displays the specific item value
console.log(dog.breed);

// Task 1
// Declare and initialise a variable called myPet and give it the value "Cat"; Note, we might have to to change it later
// to "Dog" so should we use let or const?

let myPet = "Cat";

// Task 2
// Log out the value of myPet and the length of myPet using a template string

console.log(myPet);
console.log(myPet.length);

// Task 3
// Declare and initialise a constant called daysInYear with a value of 365

const daysInYear = 365;

// Task 4
// Declare a variable called monthsInYear with a value of 12

const monthsInYear = 12;

// Declare another variable called averageDaysInMonth with a value of daysInYear divided by monthsInYear

const averageDaysInMonth = daysInYear/monthsInYear;
// Log out averageDaysInMonth

console.log(averageDaysInMonth);

// Task 5
// JavaScript has some built in modules that we can use.
// One of them is Math.
// Round averageDaysInYear using Math.round()
console.log(Math.round(averageDaysInMonth));

// Task 6
// Log out the remainder of 7 / 3

// % finds the remaining value
let remainder1 = 7%3;
console.log(remainder1);

// Task 7
// Generate a random number!
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

// Task 8
// Declare a variable called warningMessage with a value of "danger!"
// Log out the value of warningMessage in uppercase

let warningMessage = "danger";

console.log(warningMessage.toUpperCase());

// Task 9
// Declare a variable called topSnacks with a value of an Array populated with strings

let topSnacks = ["Chocolate", "Wasabi Peas", "Girdle Scone"]

// Task 10
// Declare a variable called shoppingBasket with a value of an Object.
// The keys should be items and the values should be prices

let shoppingBasket={
    milk:1,
    bread:2,
    butter:1.5,
    eggs:3
};

console.log(shoppingBasket);