
function Logging(message: string) {
  return function (constructor: Function){
    console.log(message);
    console.log(constructor);
  }
}
function Component(template: string, selector: string){
  return function<T extends { new(...args: any[]): {name: string} }>(constructor: T){
    
    return class extends constructor{
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if(mountedElement){
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }
    }
  }
}

function PropertyLogging(target: any, prorettyKey: string) {

}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging user')
class User {
  @PropertyLogging
  name = 'Quill';
  constructor(public age: number) {
    console.log('User was created!');
  }
}
const user1 = new User(32);
const user2 = new User(32);
const user3 = new User(32);