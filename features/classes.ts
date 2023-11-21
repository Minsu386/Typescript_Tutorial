class Vehicle {
  public drive(): void {
    console.log(`zoom zoom`);
  }

  public honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  public drive(): void {
    // overrides Vehicle drive console log
    console.log('chugga chugga')
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.drive();
car.honk();
