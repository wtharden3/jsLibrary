// Concise Body

let hi = () => console.log(`hello!`);

hi();

// Block Body

let hii = () => {
  console.log(`hey!!`)
}

hii();

//Concise vs Block
let apples = x => console.log(`There are ${x} apples`);

apples(10);

let appless = x => {
  console.log(`There are ${x} apples! Yay!`);
}

appless(20);