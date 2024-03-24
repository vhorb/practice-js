// task1
let myArray = [2, 3, 4, 5];

let x = 1;
for (let i = 0; i < myArray.length; i++) {
  x *= myArray[i];
}
console.log("Добуток елементів масиву (for):", x);

let x2 = 1;
i = 0;
while (i < myArray.length) {
  x2 *= myArray[i];
  i++;
}
console.log("Добуток елементів масиву (while):", x2);

// task2
for (let j = 0; j <= 15; j++) {
  if (j % 2 === 0) {
    console.log(`${j} is even`);
  } else {
    console.log(`${j} is odd`);
  }
}

// task3
function randArray(k) {
  let a = [];
  let i = 0;
  while (i < k) {
    a.push(Math.floor(Math.random() * (500 - 1 + 1)) + 1);
    i++;
  }
  return a;
}

console.log(randArray(5));

// task4
function raiseToDegree(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result *= a;
  }
  return result;
}

let userInputA = prompt("Please enter the number A:");
let userInputB = prompt("Please enter the number B:");
console.log(raiseToDegree(userInputA, userInputB));

// task5
function findMin() {
  let result;
  for (let i = 0; i < arguments.length; i++) {
    if (i === arguments.length - 1 && arguments[i] < arguments[0]) {
      result = arguments[i];
    }
    if (arguments[i] < arguments[i + 1]) {
      result = arguments[i];
    }
  }
  return result;
}

console.log(findMin(12, 14, 4, -4, -5));

// task6
function findUnique(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (el === arr[j]) {
        result = false;
      }
    }
  }
  return result;
}

console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true


// task7
function lastElem(arr, count = 1) {
  if (count === 1) {
    return arr[arr.length - 1]
  }
  if (count <= arr.length) {
    return arr.slice(-count);
  } else {
    return arr;
  }
}

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]

// task8
function camel(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

console.log(camel('i love java script'));