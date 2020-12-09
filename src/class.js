"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('This is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`);
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
teacher.greeting();
