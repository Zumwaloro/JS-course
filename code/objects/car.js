export default class Car {
    constructor(brand, fuel, speed) {
        this.brand = brand;
        this.fuel = fuel;
        this.speed = speed;
    }

    getBrand() {
        console.log(this.brand);
    }
    
    getFuel() {
        console.log(this.fuel);
    }
    
    getTopSpeed() {
        console.log(this.speed);
    }
}