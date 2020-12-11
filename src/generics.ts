
function copy<T extends {name: string}, U extends keyof T>(value: T, key: U): T {
  value[key]
  return value;
}
console.log(copy({name: 'Quill', age: 38}, 'age'));
