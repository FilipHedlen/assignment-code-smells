export class Product {
    constructor(
      public name: string,
      public price: number,
      public amount: number,
      public description: string,
      public image: string,
      public parent: HTMLElement
    ) {}
}


export class Student {
    constructor(
      public name: string,
      public handedInOnTime: boolean,
      public passed: boolean
    ) {}
}


export class Temp {
    constructor(
      public place: string, 
      public date: Date, 
      public temperature: number
    ) {}
}


export class User {
    constructor (
      public name: string,
      public birthday: Date,
      public email: string,
      public password: string
    ) {}
} 