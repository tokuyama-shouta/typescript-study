"use strict";
//TypeScript Study
//型注釈の書き方↓
//boolean(真偽値)
let hasValue = true;
//number(数値)
let count = 11;
let float = 3.14;
let negative = -0.12;
//string(文字列)
let single = 'hello';
let double = "hello";
let back = `hello`;
//型推論の書き方↓ できるだけこちらを使う
let hasValue2 = true;
//オブジェクトに型をつける
const person = {
    name: 'Jack',
    age: 21
};
console.log(person.name);
//配列に型をつける
const fruits = ['Apple', 'Banana', 'Grape'];
//Tuple型を使用して、決まった内容の配列を作る方法
//必ず型注釈する必要がある
//配列より厳しくなった物
const book = ['business', 1500, false];
//pushで追加はできる→TypeScriptは初期値に厳しだけなので
//出力の時にエラーが出る。
book.push(1);
//Enum 
//特定のまとまったグループを入れる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
//どんな型にもなるany型
//なるべく使わないようにする
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
let banana = 'banana';
banana = anything;
// Union型 複数の型を使う
let unionType = 10;
unionType = 'Hello';
let unionTypes = [21, 'Hello'];
//Literal型を使って特定の値のみ取り扱う
//unipn型と同時に使うと便利
const apple = 'apple';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
//関数に型を適応させる
//戻り値には型推論は聞かない、戻り値にはきく
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
//関数の戻り値にVoid型を使う方法
//何も返さない
//undefaindはリターンがある時のみ、基本使わない
function sayHello() {
    console.log('Hello');
}
//関数型を使って、特定の関数のみ代入できる変数を作る
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
//callback関数の型はこうかく
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
//unknown型を使って柔軟でanyよりも厳しい型を定義する方法
//unknownは使う時に
let unknownInput;
let text;
let anyInput;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
//never型を使って、起こり得ない値の型を使用する方法
//決して何も返さない
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
