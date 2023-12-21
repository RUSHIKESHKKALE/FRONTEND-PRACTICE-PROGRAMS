class vehicle {
  constructor(nuwheels, prize) {
    this.nuwheels = nuwheels;
    this.prize = prize;
  }

  getprize() {
    return this.prize;
  }
}

var v1 = new vehicle(4, 450000);
var v2 = new vehicle(8, 500000);

console.log(v1.nuwheels);
console.log(v1.getprize());

console.log(vehicle.prototype);