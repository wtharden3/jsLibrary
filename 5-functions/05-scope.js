// Scope

let x = 12;

// function scope() {
//   let x = 33; //creating a new variable
//   console.log(x);
// }

// scope();
// console.log(x)



let y = 12;

// function scope2() {
//   y = 33; //re-assignin a new value to the y variable
//   console.log(y);
// }

// scope2();
// console.log(y);

// var vs let

// var is scoped to the nearest FUNCTION block
// let is scoped to the nearest ENCLOSING block

var b = 12;

function varTest() {
  var b = 33;
  if (1 == 1) {
    var b = 45;
    console.log(b); //45
  }
  console.log(b) //45
}

varTest();
console.log(b); //12

let c = 12;

function letTest() {
  var c = 33;
  if (1 == 1) {
    let c = 45;
    console.log(c) //45
  }
  console.log(c) //33
}

letTest();
console.log(c); //12