
class Person {

  static species = 'Homo sapiens'
  static isAdult(age: number) {
    if(age > 17) return true;

  }

  constructor(public name: string,protected age: number) {
  }

  incrementAge(){
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Teacher extends Person {
  get subject() {

    if(!this._subject){
      throw new Error('This is no subject.')
    }
    return this._subject
  }

  set subject(value){
    this._subject = value;
  }

  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
  }

}

console.log(Person.species);
console.log(Person.isAdult(38));

