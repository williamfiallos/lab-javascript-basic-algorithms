// Iteration 1: Names and Input
let hacker1 = "William";
console.log("The driver's name is " + hacker1);

let hacker2 = window.prompt("What is your name?");
console.log("The navigator\'s name is " + hacker2);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length; 
const hacker2Length = hacker2.length;
let shortestString = '';

if (hacker1Length === hacker2Length) {
  console.log("Wow, you both got equally long names, " + hacker1Length + " characters!");
  shortestString = hacker1;
} else if (hacker1Length > hacker2Length) {
  console.log("The Driver has the longest name, it is " + hacker1Length + " characters.");
  shortestString = hacker1;
} else {
  console.log("Yo, navigator got the longest name, it has " + hacker2Length + " characters");
  shortestString = hacker2;
}

// Iteration 3: Loops