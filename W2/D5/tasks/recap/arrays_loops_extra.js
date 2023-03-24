//1. Iterate over an array of strings and capitalise each word:

const sentence = ["javascript", "is", "awesome"];

function changeToUpperCase(array){
let newArray = [];
for(let word of array){
  word = word.charAt(0).toUpperCase() + word.slice(1);
  newArray.push(word);
}
return newArray;
};
console.log(changeToUpperCase(sentence));

sentence.forEach((word) => {word = word.charAt(0).toUpperCase()+word.slice(1); console.log(word);})


// Write your code here...



//2. Create a new array consisting of the users names using the "name" key in the following object:

const users = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];
let nameArray = [];
for(let item of users){
  nameArray.push(item.name)
}
console.log(nameArray);

const names =users.map(item => item.name);
console.log(names);
// Write your code here...



//3. Filter out strings longer than 5 characters from the following array:

const strings = ["javascript", "is", "awesome", "but", "difficult"];

let wordArray = [];
for(let word of strings){
  if(word.length > 5){
   wordArray.push(word);
  ;}
}
console.log(wordArray);

const filterdWord = strings.filter((word) => word.length > 5); console.log(filterdWord);

// Write your code here...



//4. Count the number of even numbers in the following array:

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
let total =0;
for(let num of listOfNumbers){
  if(num % 2 === 0){
    total ++;
  }

}
console.log(total);

const countEvens = listOfNumbers.reduce((total , num) => {
if(num % 2 === 0){
 total ++;} return total;},0)
console.log(countEvens);


//5. Find the first number that is even in the given array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
let evenArray = [];
for(let num of numbers){
  if(num % 2 === 0){
    evenArray.push(num)
  }
}
console.log(evenArray[0]);

const firstEven = numbers.find((num)=> num % 2 ===0);
console.log(firstEven);


//6. Find the sum of the ages of people in the following array of objects:

const folks = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

let sumOfAges =0;
for(let person of folks){
  sumOfAges += person.age;
}
console.log(sumOfAges);

const sum = folks.reduce((total, person) => total + person.age,0)
console.log(sum);
// Write your code here...



//7. Split the given array into two separate arrays of odd and even numbers:

const evensAndOdds = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
let odd = [];
let even = [];
for (let num of evensAndOdds){
  if(num % 2 != 0){
    odd.push(num)
  }else{
    even.push(num)
  }
}
console.log(odd);
console.log(even);

const [evens, odds] =evensAndOdds.reduce((array, num) => 
{
  if(num % 2 === 0){
    array[0].push(num);
  }else{
    array[1].push(num);
  }
  return array;
},[[],[]])

console.log(evens);
console.log(odds);
//8. Create a new object from the given array of people, keys should be the names and values will be corresponding age:

const people = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];


const object = people.reduce((array, person) => {array[person.name] = person.age; return array},{})
console.log(object);
// Write your code here...



//9. Remove all odd numbers from the following array:

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...
let oddArray =[];
for(let num of allNumbers){
  if(num % 2 != 0){
    oddArray.push(num)
  }
}
console.log(oddArray);

const oddNum = allNumbers.filter((num)=>num % 2 != 0);
console.log(oddNum);

//10. Create a new array from the given array of numbers with each number doubled:

const moreNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Write your code here...

let doubled =[];
for(let number of moreNumbers){
  number *= number
  doubled.push(number)

}
console.log(doubled);

const doubledArray = moreNumbers.map((num) => num *= num);
console.log(doubledArray);
