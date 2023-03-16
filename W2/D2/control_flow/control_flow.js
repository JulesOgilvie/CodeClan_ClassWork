// conditional statements

/*

if(condition is true) {
    execute code in this block;
} else {
    do this;
}
*/

/* let isRaining = false;
let message = `No umbrella required`;

if (isRaining){
    message = `Take an umbrella`;
} else{
    message = `You're good to go`;
}

console.log(message);

const fruitType = `Apple`;

// three = are used for
if(fruitType === `Apple`){
    console.log(`Apples are £2.50 per kilo`);
} else if (fruitType === `Orange`){
    console.log(`Oranges are £1.20 per kilo`);
} else {
    console.log(`Sorry we have no ${fruitType}s.`);
}

// Switch statements

switch(fruitType){
    case `Apple`:
        console.log(`Apples are £2.50 per kilo`);
        break;
    case `Orange`:
        console.log(`Oranges are £1.50 per kilo`);
        break;
    default:
        console.log(`Sorry we have no ${fruitType}s.`);
}

 AND: Both conditions must be true

&&

OR: At least one of the conditions must be true 

||

make a statement the opposite by prefacing it with !

!false = true

---------------------------------------------------------

let number = 15;

if (number % 3 === 0 || number % 5 === 0){
    console.log(`The number is divisable by 3 or 5`);
} else {
    console.log(`The number is not divisible by 3 or 5`);
}*/

// Given a number, log out if it is greater than, less than, or equal to 5
/*const myNumber = 10

if(myNumber > 5){
    console.log(`Number is greater than 5`);
}else if (myNumber < 5){
    console.log(`Number is less than 5`);
}else{
    console.log(`Number is equal to 5`);
}*/

/*const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let num of numbersArray){
    if(num % 2 === 0){
        console.log(num);
    }
}*/

//  given a student exam mark, determine if it is a fail (less than 5), a pass (between 5 and 8), or a distinction (9 or 10)

const mark = 6;
let grade = `Grade not yet awarded`;

switch(true){
    case mark < 5: 
        grade = `Fail`;
        break;
    case mark >= 5 && mark < 9: 
        grade = `Pass`;
        break;
    case mark === 9 || mark === 10: 
        grade = `Pass with distinction`;
        break;
    default:
        grade = `Invalid`;
}

console.log(grade);