export class MyDate {
  constructor(
    public year: number = 1997,
    public month: number = 11,
    private day: number = 13
  ) {}

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

const myBirthday = new  MyDate()
console.log(myBirthday.printFormat());

