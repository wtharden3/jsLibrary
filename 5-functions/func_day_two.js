// make a function called greet

function sayHi() {
  console.log('hello')
}

// say hi
let say_hi = () => console.log('Hi');

// hello
let hello = () => {
  console.log('Hello');
}

// greet_two
let greet_two = function () {
  console.log('Hello!');
}

aList = ['Whitney', 'Harden'];

function print_list() {
  console.log(aList);
}
print_list(aList);

function better_print(list_param) {
  console.log(list_param)
}

better_print(aList);

function print_name(name) {
  console.log(name);
}
// name = "Justin"
print_name("Justin")
/*
function print_name("Justin"){
    console.log("Justin")
}
*/
// name = "Adam"
print_name("Adam")
// Write out how this works with 20
function var_loop(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
var_loop(20)

//creating the function with the name of the function (createALoop) and the name of the parameter (theNumberIWantToReach)
function createALoop(theNumberIWantToReach) {
  //creating a loop
  for (let i = 1; i <= theNumberIWantToReach; i++) {
    //console.log the value for i  which should be the number 1 to the value of theNumberIWantToReach
    console.log(i);
  }
}
console.log('the createALoop function results below:')
//this will return 1-20 because I am using 20 as my parameter
createALoop(20);

// function withTwenty(20){
//   for(let i = 1; i <= 20; i++){
//     console.log(i);
//   }
// }

function multi_print(firstThing, secondThing, thridThing) {
  // console.log multiple things (3 things) on 3 searate lines
  console.log(firstThing);
  console.log(secondThing);
  console.log(thridThing);
}

function list_print(word_list) {
  // for (word in word_list){
  //   console.log(word_list[word])
  // }
  for (word of word_list) {
    console.log(word);
  }
}

list_print(['Whitney', 'Terri', 'Harden']);

// Hoisting
