import { Animal, Dog } from './09-protected'

// Ya no podemos crear una instancia de la clase Animal porque la definimos como clase abstracta, esto quiere decir que los metodos y atributos se pueden utilizar en las clases hijas unicamente.

// const animal = new Animal('elite')
// animal.greeting()

const tommy = new Dog('Tommy', 'Raul')
tommy.greeting()
tommy.bark(3)
