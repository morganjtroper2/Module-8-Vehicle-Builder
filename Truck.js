import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    tow(vehicle) {
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`${vehicle.make} ${vehicle.model} is being towed by ${this.make} ${this.model}`);
        }
        else {
            console.log(`${vehicle.make} ${vehicle.model} can't be towed by ${this.make} ${this.model}`);
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: ${this.wheels}`);
    }
}
export default Truck;
