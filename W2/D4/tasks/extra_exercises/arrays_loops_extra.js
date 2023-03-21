//1. Iterate over an array of strings and capitalise each word:

const sentence = ["javascript", "is", "awesome"];

// Write your code here...
function changeUppercase(array){
  let newArray = [];
  for(let word of array){
    word = word.charAt(0).toUpperCase() + word.slice(1);
    newArray.push(word);
  }
  return newArray;
;}

console.log(changeUppercase(sentence));

sentence.forEach((word) => word = word.charAt(0).toUpperCase()+word.slice(1));
//2. Create a new array consisting of the users names using the "name" key in the following object:

const users = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];
// Write your code here...



//3. Filter out strings longer than 5 characters from the following array:

const strings = ["javascript", "is", "awesome", "but", "difficult"];

// Write your code here...



//4. Count the number of even numbers in the following array:

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...



//5. Find the first number that is even in the given array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...



//6. Find the sum of the ages of people in the following array of objects:

const folks = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

// Write your code here...



//7. Split the given array into two separate arrays of odd and even numbers:

const evensAndOdds = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...



//8. Create a new object from the given array of people, keys should be the names and values will be corresponding age:

const people = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

// Write your code here...



//9. Remove all odd numbers from the following array:

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...



//10. Create a new array from the given array of numbers with each number doubled:

const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...


