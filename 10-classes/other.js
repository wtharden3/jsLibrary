// Why do we need unique contexts?

let x = 5;
let y = x;

console.log(`x: ${x}, y: ${y}`);

let a = {
  data: 'testing',
};
let b = a;
a.data = 'This is new';

console.log(`a: ${a.data}, b: ${b.data}`);
