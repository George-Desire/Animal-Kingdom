//Animal Kingdom
class Animal {
    constructor(name, type) {
    //Encapsulation
      this.name = name;
      this.type = type;
    }

    makeSound() {
        //Abstraction
      return "Some generic sound";
    }
  }
  
  //First Animal
    // Inheritance
  class Lion extends Animal {
    constructor(name) {
      super(name, "Lion");
    }
  
    // Polymorphism
    makeSound() {
    //Abstraction
      return "Roar!";
    }
  }
  
  //Second Animal
  // Inheritance
  class Elephant extends Animal {
    constructor(name) {
      super(name, "Elephant");
    }
  
    // Polymorphism
    makeSound() {
     //Abstraction
      return "Trumpet!";
    }
  }
  
  //Third Animal
  // Inheritance
  class Snake extends Animal {
    constructor(name) {
      super(name, "Snake");
    }

    //Polymorphism
    makeSound() {
    // Abstraction
    return "Hiss!";
    }
  }
  
  const lion = new Lion("King");
  const elephant = new Elephant("Hefty");
  const snake = new Snake("Strategic");

  console.log(`${lion.name} the ${lion.type} says: ${lion.makeSound()}`);
  console.log(`${elephant.name} the ${elephant.type} says: ${elephant.makeSound()}`);
  console.log(`${snake.name} the ${snake.type} says: ${snake.makeSound()}`);
  