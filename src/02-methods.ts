// Una clase es una plantilla para crear objetos
export class MyDate {
  // Propiedades de la clase, cada instancia de esta clase tendra estas propiedades.
  year: number
  month: number
  day: number

  // constuctor: Método especial que se ejecuta automáticamente cuando creas una nueva instancia de la clase
  constructor(year: number, month: number, day: number) {
    // Asigna los valores de los parámetros a las propiedades de la clase
    this.year = year,
    this.month = month
    this.day = day
  }

  // Métodos
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days') {
      this.day += amount
    }
    if(type === 'months') {
      this.month += amount
    }
    if(type === 'years') {
      this.year += amount
    }
  }
}

const newDate = new MyDate(1997, 10, 13)
console.log(newDate.printFormat());
newDate.add(12, 'days')
console.log(newDate.printFormat());

