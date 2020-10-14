function Person(name, age, canVote) { //naming convention is to use a capital letter
  this.name = name;
  this.age = age;
  this.canVote = canVote;
}

console.log(typeof Person); //returns function
let person4 = new Person('Justin', 80, true);
let person5 = new Person('Amy', 54, true);
console.log(person4);
console.log(typeof person4); //returns object

console.log(person4.name);
console.log(person5.name);

//constructor function is like creating a blueprint
// person4.name = 'Adam';
person4['name'] = 'Adam';
console.log(person4.name)