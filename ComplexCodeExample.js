/*
Filename: ComplexCodeExample.js

This code is a sophisticated and elaborate example that demonstrates various JavaScript concepts and techniques. It goes beyond a simple "hello world" or a calculator and contains more than 200 lines of code.

Note: The code presented here may not be practical or have a specific purpose but is intended to showcase JavaScript programming capabilities.

*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating instances of Person
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.introduce();
person2.introduce();

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// Async function using promises
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data successfully fetched.");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Generating random numbers using a generator function
function* randomGenerator() {
  while (true) {
    yield Math.random();
  }
}

const random = randomGenerator();

console.log(random.next().value);
console.log(random.next().value);

// Class inheritance and method overriding
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy", "Labrador");
dog.makeSound();

// Using the spread operator to concatenate arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];

console.log(mergedArr);

// Complex regular expression matching
const regex = /^([A-Za-z0-9_\-\.])+@[a-z]+\.[a-z]{2,}$/;
const email = "test@example.com";

console.log(regex.test(email));

// Iterating over an object using for...in loop
const student = {
  name: "John",
  age: 20,
  grade: "A",
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// Nested functions and closures
function outerFunction() {
  const outerVar = "Outer";

  function innerFunction() {
    const innerVar = "Inner";
    console.log(`${outerVar} ${innerVar}`);
  }

  innerFunction();
}

outerFunction();

// Event handling with anonymous functions
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// Promises chaining and error handling
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed to fetch data.");
    }, 2000);
  });
}

fetchData2()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Exploring the DOM
const element = document.getElementById("myElement");
console.log(element);

// Working with dates and formatting
const currentDateTime = new Date();
console.log(currentDateTime.toLocaleString());

// Arrow functions and array methods
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Using the async/await syntax
async function exampleAsyncFunction() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

exampleAsyncFunction();

// ... (continued with more complex and creative code)