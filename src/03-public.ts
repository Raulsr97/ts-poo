// Si no se le define el acceso a una variable dntro dentro de la clase por defecto va a ser publica, tambien se puede hacer de una manera explícita agregando la palabra reservada Public
// Para evitar que la clase se pueda modificar externamente podemos usa readonly pero eso causaria un conflito ya que ni siquiera internamente podriamos hacer modificacion alguna.
export class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year,
    this.month = month
    this.day = day
  }

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

// Aqui podemos hacer uso y modificaciones de las variables y los métodos ya que la clase de donde provienen es publica
const newDate = new MyDate(1997, 10, 13)
console.log(newDate.printFormat());
newDate.year = 1999
console.log(newDate.printFormat());


