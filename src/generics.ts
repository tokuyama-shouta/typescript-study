
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