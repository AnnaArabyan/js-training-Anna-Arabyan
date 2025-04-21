class Employee {
  constructor(name, surname, email, phoneNumber, position, salary, isRemote) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.salary = salary;
    this.isRemote = isRemote;
  }

  set name(value) {
    if (value.length < 2 || value.length > 15) {
      throw new Error("Name should be between 2 and 15 characters.");
    } else if (typeof value != "string") {
      throw new Error("Incorrect data type");
    }
    this._name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    if (value.length < 2 || value.length > 15) {
      throw new Error("Surname should be between 2 and 15 characters.");
    } else if (typeof value != "string") {
      throw new Error("Incorrect data type");
    }
    this._surname =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  get surname() {
    return this._surname;
  }

  set email(value) {
    value = value.trim().toLowerCase();

    const emailPattern =
      /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if (!emailPattern.test(value)) {
      throw new Error(
        "Invalid email format. It should follow the pattern x.x@xx."
      );
    }
    this._email = value;
  }

  get email() {
    return this._email;
  }

  set phoneNumber(value) {
    if (typeof value != "string") {
      throw new Error("Incorrect data type");
    } else if (value.length != 9) {
      throw new Error("Incorrect digits count");
    } else if (
      !["091", "093", "094", "095", "096", "097", "099"].includes(
        value.slice(0, 3)
      )
    ) {
      throw new Error("Incorrect operator");
    }
    this._phoneNumber = value;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set position(value) {
    if (value.length < 2 || value.length > 50) {
      throw new Error("Position should be between 2 and 50 characters.");
    }
    this._position = value;
  }

  get position() {
    return this._position;
  }

  set salary(value) {
    if (typeof value != "number") {
      throw new Error("Incorrect data type");
    } else if (value < 68000) {
      throw new Error("Salary must be greater or equal 68,000 AMD");
    }

    this._salary = value;
  }
  get salary() {
    return this._salary;
  }

  set isRemote(value) {
    if (typeof value !== "boolean") {
      throw new Error("isRemote must be either true or false");
    }
    this._isRemote = value;
  }
  get isRemote() {
    return this._isRemote;
  }

  get info() {
    let locationStatus;
    if (this.isRemote) {
      locationStatus = "remotely";
    } else {
      locationStatus = "on-site";
    }

    return `Employee information: ${this.name} ${this.surname} is a ${this.position}. He works ${locationStatus}. 
  His salary is ${this.salary} AMD. Phone number: ${this.phoneNumber}. 
  Email: ${this.email}`;
  }

  giveRaise(amount) {
    if (typeof amount != "number") {
      throw new Error("Incorrect data type");
    } else {
      this.salary += amount;
    }
    return this.salary;
  }

  raiseSalary(percent) {
    if (typeof percent != "number" || percent <= 0) {
      throw new Error("Invalid input");
    } else {
      let raisedAmount = (this.salary * percent) / 100;
      this.salary += raisedAmount;
    }
    return this.salary;
  }
  changePosition(newPosition) {
    if (typeof newPosition !== "string") {
      throw new Error("Position must be a string");
    } else if (newPosition.length < 2 || newPosition.length > 50) {
      throw new Error("Position must be between 2 and 50 characters.");
    }
    this.position = newPosition;
  }
}

let myInstance = new Employee(
  "aNna",
  "arabyan",
  "ANNA.arabyan@TEST.COM",
  "093123211",
  "QA Engineer",
  100000,
  true
);

console.log(myInstance.info);

myInstance.raiseSalary(10);
myInstance.giveRaise(30000);
myInstance.changePosition("Senior QA Automation Engineer");

console.log(myInstance.info);
