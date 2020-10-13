// Declaration

function hi() {
  console.log('HI');
}

hi();

// Expression

let hello = function () {
  console.log('Hey!')
}

hello();

// Function Examples
function addIt() {
  console.log(5 + 10);
}

addIt();

function counting() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

counting();

// Challenge

let arr = ['This', 'is', 'really', 'cool'];

function listIt() {
  for (word of arr) {
    console.log(word);
  }
}

listIt();