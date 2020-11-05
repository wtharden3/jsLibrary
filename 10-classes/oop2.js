class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eats their food`);
  }
}

myAnimal = new Animal('Tiger');

console.log(myAnimal.name);
myAnimal.eat();

class Dog extends Animal {
  constructor(name, breed) {
    super(name); //what it needs
    this.type = breed;
  }
  play() {
    console.log(`${this.name} fetches the ball`);
  }
}

let finn = new Dog('Finn', 'Shiba Inu');

finn.eat();
finn.play();

//APIE
/**
 * Abstraction
 * - I don't need to know what console.log() works for instance
 *
 *
 * Polymorphism
 * - can overwrite methods
 *
 *
 * Inheritance
 * - the ability to build things incrementally
 * - properties this.name // this.breed
 *  or the method eat() // play()
 *
 * Encapsulation
 *
 * OOP is based on this 4 principles
 */
