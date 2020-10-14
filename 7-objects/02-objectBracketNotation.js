let garden = {
  vegetable: 'zucchini',
  flower: 'sunflower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: 10
};

let test = Object.keys(garden);
//the keys are strings
console.log(test);
console.log(typeof test[0]);

console.log(garden.vegetable);
console.log(garden['vegetable']);

let baking = {

}

//created a key value pair
baking['zuchini'] = "better make some bread!";
console.log(baking);

//cannot order an object but it is ordered alphabetically by default
