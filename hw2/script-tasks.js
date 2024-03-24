// task1
let x = 1;
let y = 2;

let res1 = `${x}` + y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = `${Boolean(x)}` + y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = 'some string' / (x + y);
console.log(res4); // NaN
console.log(typeof res4); // "number"

// task2
let userInput = prompt("Please enter the number:", '0');
let userNumber = parseInt(userInput);
if (userNumber % 2 === 0) {
  console.log('The number is even ');
  if (userNumber % 7 === 0) {
    console.log('and can be divided on 7');
  }
} else {
  console.log('enter another number');
}

// task3
let myArray = [];
myArray.push(1);
myArray.push("A");
myArray.push(true);
myArray.push(null);

console.log(myArray.length);

let userInputAgain = prompt("Please add something to array:");
myArray[4] = userInputAgain;
console.log("5th element of the array:", myArray[4]);

myArray.shift();
console.log("Array looks like:", myArray);

// task4
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join("*"));


// task5
let userInput2 = prompt("How old are you?");
let userAge;
userAge = parseInt(userInput2);
if (userAge >= 18) {
  console.log("Ви досягли повнолітнього віку");
} else {
  console.log("Ви ще надто молоді");
}

// task6
let userInputT1 = prompt("Enter 1st line of triangle:");
let userInputT2 = prompt("Enter 2nd line of triangle:");
let userInputT3 = prompt("Enter 3rd line of triangle:");

// Перетворення введених значень на числа
a = parseFloat(userInputT1);
b = parseFloat(userInputT2);
c = parseFloat(userInputT3);

if (a + b > c && b + c > a && c + a > b) {
  // 𝑆=√‾‾‾‾‾𝑝(𝑝−𝑎)(𝑝−𝑏)(𝑝−𝑐)
  let p = (a + b + c) / 2;
  let x = p * (p - a) * (p - b) * (p - c)
  let area = Math.sqrt(x);

  console.log(p);
  console.log(x)
  console.log("Площа трикутника:", area.toFixed(3));

  if (a * a + b * b === c *c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a) {
    console.log("Цей трикутник є прямокутним.");
  } else {
    console.log("Цей трикутник не є прямокутним.");
  }
} else {
  console.log('Невірні дані');
}

// task7
let currentDate = new Date();
let currentHour = currentDate.getHours();
let message;

if (currentHour >= 23 || currentHour < 5) {
  message = "Доброї ночі!";
} else if (currentHour >= 5 && currentHour < 11) {
  message = "Доброго ранку!";
} else if (currentHour >= 11 && currentHour < 17) {
  message = "Доброго дня!";
} else {
  message = "Доброго вечора!";
}

console.log(message);

switch (currentHour) {
  case (currentHour >= 23 || currentHour < 5):
    message = "Доброї ночі!";
    break;
  case (currentHour >= 5 && currentHour < 11):
    message = "Доброго ранку!";
    break;
  case (currentHour >= 11 && currentHour < 17):
    message = "Доброго дня!";
    break;
  default:
    message = "Доброго вечора!";
}

console.log(message);