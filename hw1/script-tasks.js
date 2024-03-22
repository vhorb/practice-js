// task2
console.log("HRB");

// task3
let a;
let b;

a = 1;
b = "B";
document.write("Task #3");
document.write('<br>');
document.write("This is first variable " + a);
document.write('<br>');
document.write("This is second variable " + b);
document.write('<br>');

if (confirm('Are you want to copy one value to another?')) {
  a = `${b}`
  alert("This is first variable " + a + "\n" + "This is second variable " + b);
} else {
  alert('No Magic');
}

// task4
let und;
const myObject = {
  name: "Slav",
  count: 99,
  applicable: true,
  und: und,
  info: null
};

// task5
let isAdult = confirm("Are you 18+?");
console.log("The user 18 or older:", isAdult);

// task6
let firstName;
let lastName;
let group;
let birthYear;
firstName = "Slav";
lastName = "Hrb";
group = "JS";
birthYear = 1999;

let isMarried = false;

console.log(`
Type of variable birthYear: ${typeof birthYear}, The value birthYear: ${birthYear}
Type of variable isMarried: ${typeof isMarried}, The value isMarried: ${isMarried}
Type of variable firstName: ${typeof firstName}, The value firstName: ${firstName}
Type of variable lastName: ${typeof lastName}, The value lastName: ${lastName}
Type of variable group: ${typeof group}, The value group: ${group}
`);

let nullVariable = null;
let undefinedVariable;

console.log("The variable type nullVariable:", typeof nullVariable);
console.log("The variable type undefinedVariable:", typeof undefinedVariable);

// task7
document.write("Task #7");
document.write('<br>');
let login = prompt("What is your login?", "user");
let email = prompt("What is your email?", "usermale@gmail.com");
let password = prompt("What is your password?", "qwerty");

document.write(`Dear ${login}, your email is ${email}, your password is ${password}`);
document.write('<br>');

// task8
let secondsInHour = 60*60;
let secondsInDay = secondsInHour*24;
let secondsInMonth = secondsInDay*30;

document.write("Task #8");
document.write('<br>');
document.write(`Number of seconds in an hour: ${secondsInHour}, \nNumber of seconds in a day: ${secondsInDay}, \nNumber of seconds per month (30 days): ${secondsInMonth}`);