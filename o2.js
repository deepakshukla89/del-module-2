class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
  }
}

const car1 = new CarCl("Ford", 120);

console.log(`${car1.make}'s current speed: ${car1.speed} km/h`);
console.log(`${car1.make}'s current speed in mi/h: ${car1.speedUS} mi/h`);

car1.accelerate();
car1.accelerate();
car1.brake();

console.log(`${car1.make}'s current speed: ${car1.speed} km/h`);
console.log(`${car1.make}'s current speed in mi/h: ${car1.speedUS} mi/h`);

car1.speedUS = 75;
console.log(`${car1.make}'s updated speed: ${car1.speed} km/h`);
console.log(`${car1.make}'s updated speed in mi/h: ${car1.speedUS} mi/h`);
