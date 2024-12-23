// Getters
// Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no podemos modificarlos o mutarlos.
// Los podemos acceder como si fueran una propiedad más de la instancia.
// Por definición todos los getters deben retornar algo.

export class MyDate {
  constructor(
    public year: number = 1997,
    public month: number = 11,
    private _day: number = 13
  ) {}

  printFormat(): string {
    let day = this.addPadding(this._day)
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
      this._day += amount
    }
    if(type === 'months') {
      this.month += amount
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
}

const myDate = new MyDate(1997, 4, 3)
console.log(myDate.printFormat());
console.log(myDate.day);
console.log('1997', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 4, 3)
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2024, 4, 3)
console.log('2024', myDate3.isLeapYear);




