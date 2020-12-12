
function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value;
}
console.log(copy({name: 'Quill', age: 38}, 'age'));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item),1)
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Greap');
stringLightDatabase.remove('Banana');

interface TmpDatabase<T> {
  id: number;
  data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32]
}

interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('hello');
  },3000);
})
fetchData.then(data => {
  data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato','Broccoli','Asparagus'];

interface ResponseData<T extends { message: string} = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;
interface Vegetables {
  readonly tomato: string;
  pumpkin?: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
  -readonly [P in keyof Vegetables]-?: string
}