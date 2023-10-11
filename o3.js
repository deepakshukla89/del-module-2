class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }

  chargeBattery(charge) {
    this._charge = charge;
    console.log(`${this.make}'s battery is charged to ${charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this._charge -= 5;
    console.log(
      `${this.make} is accelerating. New speed: ${this.speed} km/h. Battery charge: ${this._charge}%`
    );
    return this;
  }
}

const car1 = new EVCl("Rivian", 120, 23);

car1.accelerate().chargeBattery(50).brake().accelerate();

console.log(`${car1.make}'s current speed: ${car1.speed} km/h`);
console.log(`${car1.make}'s battery charge: ${car1._charge}%`);
