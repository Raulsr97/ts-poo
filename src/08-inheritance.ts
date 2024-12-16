export class Animal {
  constructor (public name: string) {}

  // Métodos
  move() {
    console.log('Moving along!');
  }
  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

// Heredando la clase animal
export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

// Creando una instancia de la clase Animal
const botas = new Animal('Botas')
console.log(botas.greeting());
botas.move()

// Creando instancia de la clase Dog
const tommy = new Dog('Tommy', 'Raul')
console.log(tommy.greeting());
tommy.move()
tommy.bark(3)
console.log(tommy.owner);
