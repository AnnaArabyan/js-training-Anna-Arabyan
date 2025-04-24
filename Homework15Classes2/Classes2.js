import {
  validateStringInput,
  validateAndFormatString,
  validateNumber,
  getWithDefault,
} from "./HelperFunctions.js";

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //Private method
  #checkServiceStatus() {
    console.log("Service status: OK");
  }

  //Static method - call it on the class itself, not on the object.
  static vehicleType() {
    return "Car";
  }

  // call it with parentheses ()
  displayDetails() {
    return `"This is a car model ${this.model} of the year ${this.year}.`;
  }

  set make(value) {
    validateStringInput(value);
    value = validateAndFormatString(value);
    this._make = value;
  }

  get make() {
    return this._make;
  }

  set model(value) {
    validateStringInput(value);
    value = validateAndFormatString(value);
    this._model = value;
  }

  get model() {
    return this._model;
  }

  set year(value) {
    value = getWithDefault(value, 2025, { checkYear: true });
    validateNumber(value);
    this._year = value;
  }

  get year() {
    return this._year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity, electricRange, chargingTime) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
    this.electricRange = electricRange;
    this.chargingTime = chargingTime;
  }

  set batteryCapacity(value) {
    value = getWithDefault(value, 50);
    validateNumber(value);
    this._batteryCapacity = value;
  }

  get batteryCapacity() {
    return this._batteryCapacity;
  }

  set electricRange(value) {
    value = getWithDefault(value, 350);
    this._electricRange = value;
  }

  get electricRange() {
    return this._electricRange;
  }

  set chargingTime(value) {
    value = getWithDefault(value, 8);
    this._chargingTime = value;
  }

  get chargingTime() {
    return this._chargingTime;
  }

  chargeBattery() {
    console.log("Charging the battery...");
  }

  displayDetails() {
    return `"This is an Electric Car model ${this.model} of the year ${this.year}, with a ${this.batteryCapacity} kWh battery,
   ${this.electricRange} km range, and charging time of ${this.chargingTime} hours."`;
  }

  static isEcoFriendly() {
    return true;
  }
}

class GasCar extends Car {
  constructor(make, model, year, fuelCapacity, fuelEfficiency, emissions) {
    super(make, model, year);
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
    this.emissions = emissions;
  }

  set fuelCapacity(value) {
    value = getWithDefault(value, 50);
    validateNumber(value);
    this._fuelCapacity = value;
  }

  get fuelCapacity() {
    return this._fuelCapacity;
  }

  set fuelEfficiency(value) {
    value = getWithDefault(value, 15);
    validateNumber(value);
    this._fuelEfficiency = value;
  }

  get fuelEfficiency() {
    return this._fuelEfficiency;
  }

  set emissions(value) {
    value = getWithDefault(value, 120);
    validateNumber(value);
    this._emissions = value;
  }

  get emissions() {
    return this._emissions;
  }

  refuel() {
    console.log("Refueling the car...");
  }

  displayDetails() {
    return `"This is a Gas Car model ${this.model} of the year ${this.year}, with a ${this.fuelCapacity}L fuel tank,
   ${this.fuelEfficiency} km/L efficiency, and ${this.emissions} g/km CO2 emissions."`;
  }

  static isEcoFriendly() {
    return false;
  }
}

let myCar = new Car("toYota", "coROLA");
console.log(myCar.displayDetails());

let myElectriCar = new ElectricCar("BYD", "Sealion", 2025, 100, 200, 300);
console.log(myElectriCar.displayDetails());

let myGasCar = new GasCar("Sedan", "Toyota", 2000);
console.log(myGasCar.displayDetails());
