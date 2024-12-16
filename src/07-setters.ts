// Setters: Una forma de modificar atributos.
// Set: Metodo void(no retorna nada), lo podemos usar para tener reglas de modificación para nuestros atributos.


export class MyDate {
  constructor(
    public year: number = 1997,
    private _month: number = 11,
    private _day: number = 13
  ) {}

  printFormat(): string {
    let day = this.addPadding(this._day)
    let month = this.addPadding(this._month)
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
      this._day += amount
    }
    if(type === 'months') {
      this._month += amount
    }
    if(type === 'years') {
      this.year += amount
    }
  }

  get day() {
    return this._day
  }

  get isLeapYear(): boolean {
    return  (this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0));
  }

  get month() {
    return this._month
  }

  set month(newValue: number) {
    if(newValue >= 1 && newValue <= 12) {
      this._month = newValue
    } else {
      throw new Error('month out of range')
    }
  }
}

const myDate = new MyDate(1997, 4, 3)
console.log(myDate.printFormat());
myDate.month = 12
console.log(myDate.month)







