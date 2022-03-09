class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

let subaru = new Car("Subaru", "Outback", 2005, "Gery");

subaru.setColor("Red");
