
//TypeScript Study

//型注釈の書き方↓

//boolean(真偽値)
let hasValue: boolean = true;

//number(数値)
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

//string(文字列)
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;


//型推論の書き方↓ できるだけこちらを使う
let hasValue2 = true;


//オブジェクトに型をつける
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}
console.log(person.name)


//配列に型をつける
const fruits: string[] = ['Apple','Banana','Grape']

