class Car {
  brand;
  model;
  speed;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.speed = carDetails.speed;
  }

  displayInfo() {
    return console.log(
      `Brand: ${this.brand} Model: ${this.model}, Speed: ${this.speed} km/h`, 
    );
  }

  go() {
    if (this.speed <= 200) {
      return (this.speed += 5); 
    } else return console.log('Invalid');
  }

  brake() {
    if (this.speed >= 5) {
      return (this.speed -= 5);
    } else return console.log('Invalid');
  }
}

const car1 = new Car({
  brand: 'Misyubibi',
  model: 'V1',
  speed: 0,
});

const car2 = new Car({
  brand: 'Ferrari',
  model: 'V2',
  speed: 0,
});

console.log('Cars');
console.log(car1);
console.log(car2);

car1.go();
car2.go();
car1.brake();
car1.brake();

car1.displayInfo();
car2.displayInfo();
