// Creating arrays
/*const shoppingList = [`Water`, `Eggs`, `Coffee`];
const plants = [`Cheese plant`, `Peace lily`, `Monstera`];

const numbers = [1, 2, 3, 4, 5];
const random = [2, 400, `cookies`, [239, 576, 790]];

// ---------------------------------------------

// access positions within arrays

console.log(shoppingList);
console.log(plants[0]);
console.log(random[3]);

// ---------------------------------------------

// access position within a nested array

console.log(random[3][0]);

const ticTacToe = [[`X`, `O`, `X`], [`O`, `X`, `O`], [`X`, `O`, `X`]];
console.log(ticTacToe[1][1]);

// ---------------------------------------------

// find length of an array
console.log(ticTacToe.length);

// ---------------------------------------------

// change item in an array. If array is a const variable, you do not need to change variable to let as the data type isn't being changed. You are only updating the items

shoppingList[0] = `Tea`;
console.log(shoppingList);

// ---------------------------------------------

// find the index number of an item
console.log(plants.indexOf(`Monstera`));

// ---------------------------------------------

// assigns index of array search result into variable then uses with original array name to display that index in the list

const indexOfPlants = plants.indexOf(`Monstera`);
console.log(plants[indexOfPlants]);

// ---------------------------------------------

// removes elements from an array, if included, replaces them. (index of item being removed, number of items from the index being removed, item/s being added in it's place). if number of items is blank, it will remove everything from the index selected onwards

plants.splice(indexOfPlants,1,`Mint`);
console.log(plants);

// ---------------------------------------------

// push to add items to the end of an array

shoppingList.push(`Chocolate`, `Milk`);
console.log(shoppingList);

// ---------------------------------------------

// unshift to add items to the start of an array

shoppingList.unshift(`Cheese`, `Bread`);
console.log(shoppingList);

// ---------------------------------------------

// pop removes last item from the array

shoppingList.pop();
console.log(shoppingList);

// ---------------------------------------------

// removes last item and saves to a variable
const lastItem = shoppingList.pop();
console.log(lastItem);

// ---------------------------------------------

// removes first item from an array
shoppingList.shift();
console.log(shoppingList);*/

// ----------------------------------------------------
// arrays task

/*const cities = [`Manchester`, `Liverpool`, `Edinburgh`, `Dundee`, `Perth`, `Glasgow`];

// get length of cities array and print
console.log(cities.length);

// print out indexed item in an array
console.log(cities[2]);

// update an item in the array
cities[2] = `City of Edinburgh`
console.log(cities[2]);

// add an item to the end of the array
cities.push(`Aberdeen`);
console.log(cities[0]);

// add an item to the beginning of the array
cities.unshift(`Inverness`);
console.log(cities[0]);

// remove the first item
cities.shift();
console.log(cities[0]);

// find the index of an item
const liverpoolIndex = cities.indexOf(`Liverpool`);
console.log(liverpoolIndex);

// remove the index found using indexOf
cities.splice(liverpoolIndex,1);
console.log(cities);*/
// ---------------------------------------------------
// loops

// Access items in an array using a loop
/*const scores = [10, 20, 30];

for (let value of scores){
    console.log(value);
}

console.log(scores);

// total all numbers in an array

const numbers = [1, 2, 3, 4, 5];

let total = 0;

for (let number of scores){
    total += number
}
console.log(`Total is `, total);

// try to add one to each value within the scores array

// let index = 0 (starting index), index < 5 (while index is less than 5), index++ (increments the index number)

/*for (let index = 0, index < 5; index++){
    console.log(`Adding a point`);
}

// while loop
let x = 2;
while(x<=6){
    x +=2;
}

console.log(x);

// to break an infinite loop
while(true){
    console.log(`This will log out points`);
    break;
}*/

// ----------------------------------
// arrays and for loops

/*const cities = [`Manchester`, `Liverpool`, `Edinburgh`, `Dundee`, `Perth`, `Glasgow`];

for(let city of cities){
    console.log(`I love ${city}`);
}*/

/*const prices = [1.20, 2, 3.40, 5.60];

for(let counter = 0; counter < prices.length;counter++){
    let tenPercent = prices[counter] / 10;
    prices[counter] = Math.round(prices[counter]+tenPercent);
}

console.log(`New Prices: `, prices);*/

// while loop

let count = 1;
while(count <= 10){
    console.log(count);
    count++;
}