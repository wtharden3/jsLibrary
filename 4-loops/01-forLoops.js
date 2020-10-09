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

let name = "Whitney Harden";
console.log(name.length);
console.log(name.split(" "));

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
  if (name[0] != " ") {
    console.log(letter);
  }
}

let sum = 0;

for (let i = 0; i <= 50; i++) {
  sum += i;
  console.log(sum);
}