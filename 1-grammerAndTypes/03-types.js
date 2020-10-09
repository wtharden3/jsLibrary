// BOOLEANS
let on = true;
console.log(on);

let off = false;
console.log(off);

//* Null
let empty = null;
console.log(empty);

/**
 * null and undefined are not the same
 * if you need to assign an empty value to something use null instead of
 * allowing JavaScript to assign undefined;
 *
 * null is it's own data type
 */

// NUMBERS
let degrees = 90;
console.log(degrees);

let precise = 99999999999999999;
console.log(precise);

let rounded = 99999999999999999;

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// JS can do basic math but not the most reliable calculator

let a = Number("123");
console.log(a);

// STRINGS
let stringOne = "double quotes";
let stringTwo = "single quotes";
let stringThree = "I'm home";
//string interpolation
let stringFour = `I'm home`;
let stringFive = `You can use ${stringOne} or ${stringTwo}!`;
console.log(stringFive);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second);

//finding out data type
console.log(typeof first);
console.log(typeof second);

//OBJECTS

let frodo = {
  //key: value
  //key/value pair
  race: "hobbit",
  rings: 1,
  isShort: true,
};

console.log(frodo);
console.log(typeof frodo);

//ARRAYS
let tacos = ['large', 4, true];
console.log(tacos);
console.log(typeof tacos);
// arrays are classified as objects

//Challenge
let firstName = 'Whitney';
let lastName = 'Harden';
let houseNumber = 11815;
let street = 'Fawn Crest Drive';
let city = 'Lawrence';
let state = 'Indiana';
let zipCode = 46235;

console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipCode}`);


let person = {
  firstName: 'Whitney',
  lastName: 'Harden',
  address: {
    houseNumber: 11815,
    street: 'Fawn Crest Drive',
    city: 'Lawrence',
    state: 'IN',
    zipCode: 46235
  }
}

console.log(`I used an object this time: ${person.firstName} ${person.lastName}, ${person.address.houseNumber} ${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zipCode}`);

// STRING PROPERTIES AND METHODS
let myName = "Whitney";
console.log(myName.length);

console.log(myName.toUpperCase());

let home = 'My home is in Lawrence';
console.log(home.includes('Lawrence')); // will return a Boolean
//you can combine methods

let sent = 'This sentence will be split into individual parts';
let sentArray = sent.split(" ");
console.log(sentArray);
console.log(sent.split(" "));

console.log(`The sentArray array has ${sentArray.length} values.`);
console.log(sentArray[2]);
console.log(sent.split(" ")[1]);