class Animal {
  sound() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {
  sound() {
    // method overriding: The child class method overrides the parent class method with the same name
    console.log("Bark");
  }
}

class Tiger extends Animal {
  sound() {
    // Calls the parent's sound() method
    super.sound();
    // Adds Tiger's own behavior
    console.log("Roar");
  }
}

const dog = new Dog();
dog.sound();

const tiger = new Tiger();
tiger.sound();
