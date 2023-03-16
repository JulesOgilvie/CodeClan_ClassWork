/* -------------------------------------------------------------

Practice writing and using functions by providing functions to fulfill the following requests;
You can test your functions by executing them in a console.log()

e.g. console.log(my_function())

1. Return the square of a number
2. Convert Celsius to Fahrenheit
3. Find the area of a given Rectangle
4. Find the area and perimeter of a Circle
5. Generate a random number
6. Reverse a string.


------------------------------------------------------------- */
// ex 1
console.log(`------------------------------------`);

function square(number){
    return number * number;
}

const nineSquare = square(9);
console.log(`The squared number is ${nineSquare}`);

// ex 2
console.log(`------------------------------------`);

function tempConvert(celsius){
    console.log(`The temperature is Celsius is ${celsius} degrees`)
    const fahrenheit = (celsius * 1.8 + 32);
    return fahrenheit;
}

const fahrenheit = tempConvert(-40);
console.log(`The temperature in Fahrenheit is ${fahrenheit} degrees`);

// ex 3
console.log(`------------------------------------`);

function areaCalc(width, length){
    const area = width * length;
    return area;
}

const area = areaCalc(2, 4);
console.log(`The area of the rectangle is ${area}cm`);

// ex 4
console.log(`------------------------------------`);

//  variables

const pi = 3.14;
const radius = 4;

// calculates area

function circleAreaCalc(radius, pi){
    const area = radius * pi;
    return area;
}

const circleArea = circleAreaCalc(radius, pi);

// calculates circumference

function circumferenceCalc(radius, pi){
    const diameter = radius * 2;
    const circumference = diameter * 3.14;

    return circumference;
}

const circleCircumference = circumferenceCalc(radius, pi);


console.log(`The area of the circle is ${circleArea}cm, and the circumference is ${circleCircumference}cm`);

// ex 5

console.log(`------------------------------------`);

function getRandomNumber() {
    const number = Math.random();
    return number;
};

const randomNumber = getRandomNumber();

console.log(randomNumber);


// ex 6 
console.log(`------------------------------------`);

function reverseString(str){
    return str.split("").reverse().join("");
}
const message = reverseString("Good Morning");

console.log(message);