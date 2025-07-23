import Robot from './Robot.js';

export default class FlyingRobot extends Robot {
  constructor(name, legs) {
    super(name, legs);
  }
  sayHi() {
    console.log(` ${this.name} stay Hi!`);
  }
  takeOff() {
    console.log(`${this.name} is taking off!`);
  }
  land() {
    console.log(`${this.name} is landing!`);
  }
}
