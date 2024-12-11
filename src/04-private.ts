export class MyDate {
  year: number
  month: number
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year,
    this.month = month
    this.day = day
  }

  printFormat(): string {
    let day = this.addPadding(this.day)
    let month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`
  }

  // Este método solo se va a poder usar internamente en la clase
  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
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

const myDate = new MyDate(1997, 4, 3)
console.log(myDate.printFormat());

// Si lo intentamos usar por fuera nos va a generar un error
// myDate.addPadding()


