export class MyDate {
  year: number
  month: number
  day: number

  constructor(year: number, month: number, day: number) {
    this.year = year,
    this.month = month
    this.day = day
  }
}

const date = new MyDate(2024, 11, 11)
console.log(date);
