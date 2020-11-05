// Classes

//they are a blueprint for like things

//declaring a class

// class Automobile {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
// }

// let myCar = new Automobile('Jeep', 'Wrangler');
// console.log(myCar.make);
// console.log(myCar.model);

// Unammed vs Named Classes

//unamed
// let Vehicle = class{
//   constructor(make, model){
//     this.make = make;
//     this.model = model;
//   }
// }

//named
// let Vehicle = class Vehicle2{
//   constructor(make, model){
//     this.make = make;
//     this.model = model;
//   }
// }

// Methods

// old syntax
// const automobile = {
//   start: function(){
//     // do something
//   },
//   stop: function(){
//     // do something
//   }
// }

// new syntax - prototype method
// const automobile = {
//   start(){
//     // do something
//   },
//   stop(){
//     // do something
//   }
// }

class Automobile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`The ${this.make} and ${this.model}'s engine started!`);
  }
  stop() {
    console.log(`The ${this.make} and ${this.model}'s engine stopped!`);
  }
}

//create an instance of a class
let myOtherCar = new Automobile('Honda', 'Civic');
myOtherCar.start();

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person = {
  name: 'Justin',
  age: 27,
  speak: () => {
    `This is ${name} talking.`;
  },
};
