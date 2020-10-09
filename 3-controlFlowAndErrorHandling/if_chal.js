// CHALLENGE
// ************
//     Bronze:
//     Write an if else statement that checks your name;
//     If it is your name, console log '<name>'
//     If the name does not match, console.log 'Hello, what is your name?'
//     Silver:
//     If It is your name, console log 'Hello, my name is <name>'
//     Gold:
//     If it is not your name, console log 'Hello, is your name <name here> ?'

// let correctName = 'Whitney';
// let enteredName = 'Whitney'

// if (enteredName == correctName) {
//   console.log(enteredName);
// } else {
//   console.log('Hello! What is your name?');
// }

// //enteredName let changed here
// enteredName = `John`;

// if (enteredName == correctName) {
//   console.log(`Hello, my name is ${enteredName}`);
// } else {
//   console.log(`Hello, is your name ${enteredName} 🧐`);
// }

// CHALLENGE
// ************
//     Use this string: let name = 'zAchARy';
//     Bronze:
//     Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
//     If it is not console.log 'hey, this isn't written correctly'
//     Silver:
//     If the first letter of a string is uppercase, only console.log that letter
//     if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
//     Gold:
//     If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
//     If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercaseC

//Dot notation
// let student = {
//   name: "Justin",
//   grade: 12
// }

// let names = ['Justin', 'Adam', 'Amy'];

//console.log(typeof names);

// console.log(student.name);


let name = 'zAchARy';

console.log(name[0]);
if (name[0] === 'Z') {
  console.log(name);
} else {
  console.log('Hey, this isn\'t written correctly');
}

console.log(name[0]);
if (name[0] === name[0].toUpperCase()) {
  console.log(name[0]);
} else {
  console.log(name.slice(1));
}

//name = 'ZAchARy';
console.log(name[0]);
if (name[0] === 'Z') {
  console.log(name[0] + name.slice(1).toLowerCase());
} else {
  console.log(`First letter is capital: ${name[0].toUpperCase() + name.slice(1).toLowerCase()}`);
}