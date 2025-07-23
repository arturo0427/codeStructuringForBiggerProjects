export default class Robot {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs || 0;
  }
  sayHi() {
    console.log(`Hi, I am  ${this.name}!`);
    console.log(`I'm have  ${this.legs} legs.`);
  }
}
