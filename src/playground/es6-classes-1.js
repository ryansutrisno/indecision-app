class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is a ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  getGreeting() {
    let greeting = super.getGretting();

    if (this.homelocation) {
      greeting += `I am visiting from ${this.homelocation}`;
    }

    return greeting;
  }
}

const me = new Traveler("Ryan Sutrisno", 31, "Yogyakarta");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
