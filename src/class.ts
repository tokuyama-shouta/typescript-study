
class Person {

  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let Person2: Person;
const quill = new Person('Quill');
quill.greeting();
const anotherQuill = {
    name: 'anotherQuill',
    greeting: quill.greeting
}
anotherQuill.greeting();