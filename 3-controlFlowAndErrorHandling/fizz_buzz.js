let fB = 11;

// console.log(15 % 3);
// console.log(28 / 3);

// if (fB % 3 == 0 && fB % 5 != 0) {
//   console.log('Fizz');
// } else if (fB % 5 == 0 && fB % 3 != 0) {
//   console.log('Buzz');
// } else if (fB % 5 == 0 && fB % 3 == 0) {
//   console.log('Fizz Buzz')
// }

(fB % 3 == 0 && fB % 5 != 0) ? console.log('Fizz'): (fB % 5 == 0 && fB % 3 != 0) ? console.log('Buzz') :
  (fB % 5 == 0 && fB % 3 == 0) ? console.log('Fizz Buzz') : console.log(`${fB} is not divisible by 3 or 5`);


// switch (true) {
//   case (fB % 3 == 0 && fB % 5 != 0):
//     console.log('Fizz');
//     break;

//   case (fB % 5 == 0 && fB % 3 != 0):
//     console.log('Buzz');
//     break;

//   default:
//     console.log('Fizz Buzz');
// }

// switch (true) {
//   case (fB  3 == 0 && fB % 5 != 0):
//     console.log('Fizz');
//     break;

//   case (fB % 5 == 0 && fB % 3 != 0):
//     console.log('Buzz');
//     break;

//   default:
//     console.log('Fizz Buzz');
// }
// FB % 15 == 0 is a shortcut for both

//For Loop


for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { //can use (i % 15 == 0)
    console.log(`Fizz Buzz`);
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}