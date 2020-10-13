let isOn = false;

// if (<some expression>) { <do something> }
// if (isOn == true) {
//   console.log('The light is on');
// }

// if (isOn) {
//   console.log('The light is on 💡');
// }

// if (isOn == false) {
//   console.log('the light is off 🌚');
// }

// let weather = 75;

// if (weather < 70) {
//   console.log('Wear a jacket! 🥶');

// if (weather < 70) {
//   console.log('Wear a jacket! 🥶');
// } else {
//   console.log('No jacket needed. 🥵');
// };

////////////////////////////

//Switch Statements
let officeChar = "Pam";

switch (officeChar) {
  // kinda like if officeChar == "Michael"
  case "Michael":
    console.log('My mind is going a mile an hour!');
    break;

  case "Dwight":
    console.log("Perfectenslag!");
    break;

  case "Jim":
    console.log('Bears. Beets. Battlestar Galactica');
    break;

  default:
    console.log(`I'm sorry, ${officeChar}, but do I know you?`);
}

// break will leave the switch after the block runs

let dessert = "carrots";

switch (dessert) {
  case "pie":
    console.log('Pie, pie, me oh my!');
    break;

  case "cake":
    console.log('Cake is great');
    break;

  case "ice cream":
    console.log("Ice scream for Ice cream!");
    break;

  default:
    console.log(`${dessert} is not on the menu.`);
}

if (dessert == "pie") {
  console.log('Pie, pie, me oh my!');
} else if (dessert == "ice cream") {
  console.log("Ice scream for Ice cream!");
} else {
  console.log(`${dessert} is not on the menu.`);
}

// Ternary - do one thing or the other
let num = 6;

// () ? true : false
(num == 6) ? console.log('it\'s true'): console.log('This is not true');

//Fizz Buzz

let fB = 0;

// if (fb%3 == 0)
console.log(9 % 3);