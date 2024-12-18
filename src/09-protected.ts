// Protected: modificador de acceso que permite que los atributos y metodos sean accesibles dentro de la clases Padre y las clases hija pero restringiendo el uso fuera de las mismas


export abstract class Animal {
  constructor (protected name: string) {}

  // Métodos
  move() {
    console.log('Moving along!');
  }
  greeting() {
    return `Hello, I'm ${this.name}`
  }
  protected doSomething() {
    console.log('dooo');
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
      console.log(`woof! ${this.name}`);
    }
    this.doSomething()
  }

  // Sobreescribiendo el metodo move de la clase padre y agregandole mas características
  move() {
    console.log('moving as a dog');
    super.move()
  }
}

// Creando instancia de la clase Dog
const tommy = new Dog('Tommy', 'Raul')
tommy.bark(1)
tommy.move();



