  // Los staticos pueden ser llamados directamente desde la clase sin necesidad de instanciarla.

  // Valores estáticos
  console.log(Math.PI);
  // Métodos estáticos
  console.log(Math.max(1, 2, 3, 9, 1, 3));


class MyMath {
  // Previene que el valor se pueda modificar más adelante con readonly
  static readonly PI = 3.14

// ...numbers: number[]: Es un parámetro rest.

// Los tres puntos (...) permiten que el método acepte un número indeterminado de argumentos y los agrupe en un arreglo llamado numbers.
// number[] indica que este será un arreglo de números.
  static max(...numbers: number[]) {
    // numbers.reduce()
    // El método reduce se utiliza para reducir un arreglo a un único valor aplicando una función acumuladora.
    // (max, item): max es el acumulador e item es el valor que se esta evaluando en cada iteración.
    return numbers.reduce((max, item) => max >= item ? max : item, numbers[0])
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(8, 7, 6, 9, 4, 3, 2, 1));

// utilizando el spread operator

const number = [123, 43, 876, 12]
console.log(MyMath.max(...number));

const number2 = [-9, -234, -1]
console.log(MyMath.max(...number2));


