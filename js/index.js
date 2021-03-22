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
// option 1:
console.log(hacker1.toUpperCase('').split('').join(' '));
// option 2:
const hacker1Capitals = hacker1.toUpperCase();
let hacker1Chars = "";
for(let i = 0; i<hacker1Length; i++) {
  hacker1Chars += hacker1Capitals[i] + ' ';
}
console.log(hacker1Chars.trim());

// reversed
let hacker2Reversed = "";
for (let i = hacker2Length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
} 
console.log(hacker2Reversed);

// lexicographic order
let comparisonResult = '';
for (let i = 0; i <shortestString.length; i++) {
  if (hacker1[i] > hacker2[i]) {
    console.log("The Driver's name goes first");
    break;

  } else if (hacker1[i] < hacker2[i]){
    console.log("Yo, the navigator goes first definitely");
    break;

  } else {
    console.log("What?! You both got the same name?");
  }
}
console.log(comparisonResult);