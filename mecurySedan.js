//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}


//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends Vehicle {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super();

        this.maximumPassengers = maximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = false;
        this.availableRoom = false;
        this.start = false;

    }

    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers) {
            this.availableRoom == true;
            console.log("You can load " + (this.maximumPassengers - this.passenger) + " more passengers.")
        }
    }

    startCar() {
        if(this.fuel > 0) {
            this.start == true;
            console.log("Car has started!")
        }
    }

    scheduleMaintenance(mileage) {
        if(mileage > 30000) {
            this.scheduleService == true;
            console.log("This car needs to be serviced!")
        }
    }
}

let mercurySedan = new Car(6,0,4,200,100,false);
console.log(mercurySedan);
mercurySedan.loadPassenger()
mercurySedan.startCar()
mercurySedan.scheduleMaintenance(50000)


