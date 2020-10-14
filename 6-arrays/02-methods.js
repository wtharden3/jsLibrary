//array methods

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//push() appends something to the END of our array
food.push('Pizza')
console.log('push:', food);

//splice() - 1. positions, 2. how many things you want to cut/delete 3. What you want in it's place
food.splice(1, 1, 'Bananas');
console.log('splice:', food); //cut 1 thing from positon 1 and replaced it with Bananas -- Shrimp was cut

food.splice(2, 0, 'Sweet Potato'); //cut 0 things from positon 2 (Quesidilla) and add "Sweet Potato"
console.log('splice:', food);

food.splice(1, 3, 'A', 'B', 'C');
console.log('splice remove 3 and add 3:', food);

food.splice(2, 0, 'Banana Apricot Cake').push('Car');
console.log('splice chained:', food);

//pop() - removes the last item in the array
food.pop();
console.log('pop:', food);

//shift() - removes the first item in the array
food.shift();
console.log('shift: ', food);

//unshift() - inserts elements at the start of the array
food.unshift('Popcorn', 'Steak');
console.log('unshift: ', food);

//new array
let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];
let newArr = dogs.push('Bull Terrier');
console.log(newArr); //returns 5

// let newArr2 = dogs.unshift('Great Dane', 'Husky');
// console.log(dogs);

for (i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

// forEach() method
console.log('forEach() below:')
dogs.forEach(dog => console.log(dog));

dogs.forEach(function (dog) {
  console.log(dog);
})

dogs.forEach((dog, index) => {
  console.log(dog);
  console.log(index);
})

let movies = ['The Black Panther', 'Blackbox', 'Captain America: Winter Soldier', 'The Avengers'];
movies.forEach(movie => console.log(movie));

movies.push('The Green Mile');
movies.splice(3, 1, "The Wizard of Oz");
movies.forEach((movie, index) => console.log(`movie: ${movie}, index: ${index}`));

//reverse()
let arr = [1, 2, 3, 4, 5];
if (arr instanceof Array) {
  let revArr = arr.reverse();
  revArr.forEach(num => console.log(num));
} else {
  console.log('not an array');
}

// forEach() and reverse()

//truthy and falsey
// "" (empty string) evaluates to false -- it is falsey
// "string" evaluates to true -- it is truthy
// 0 evaluates to false -- it is falsey
// 1 (or any other number other than 0) evaluates to true -- it is truthy

if (0) { //false -- in a since it is "off"
  console.log(true);
} else {
  console.log(false)
} // returns false