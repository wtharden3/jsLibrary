// let i = 7;

// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (i = 2; i < 20; i += 2) {
//   console.log(i);
// }

for (let i = 2; i >= -24; i -= 2) {
  console.log(i);
}

let name = 'Whitney Harden';
console.log(name.length);
console.log(name.split(' '));

// for (let i = 0; i <= name.length - 1; i++) {
//   if (name[i] != " ") {
//     console.log(name[i]);
//   }
// }

// better for loop
// for of loop - it will allow you to go through each instance
/**
 * (1)                       (2)
 * for (< your_name_choice > of < some collection >) {
 *    <do something>
 * }
 *
 *  1. for loop declaration
 *  2. of - is a build in word (keyword) saying for all things in a collection common name is "for of" loop
 */
for (letter of name) {
  if (name[0] != ' ') {
    console.log(letter);
  }
}

let sum = 0;

for (let i = 0; i <= 50; i++) {
  sum += i;
  console.log(sum);
}

//--------PRACTICE FOR LOOPS

//FOR
console.log('for loop');
for (let i = 0; i <= 10; i++) {
  //this will iterate 10 times
  console.log(`This is time number ${i} that this iterated!`);
}

//FOR OF
let stuffArr = [
  true,
  'or',
  false,
  'I',
  'will put',
  'a bunch',
  'of stuff',
  'here',
  9,
];
console.log('for of loop');
for (stuff of stuffArr) {
  console.log(stuff);
}

//FOR IN
console.log('FOR IN LOOP');
for (index in stuffArr) {
  console.log(stuffArr[index]);
}

//FOR EACH METHOD
console.log('foreach method');
stuffArr.forEach(thing => console.log(thing));

//FIZZ BUZZ
// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
