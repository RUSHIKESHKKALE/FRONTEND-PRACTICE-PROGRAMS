class vehicle {
  constructor(nuwheels, prize) {
    this.nuwheels = nuwheels;
    this.prize = prize;
  }

  getprize() {
    return this.prize;
  }
  printdetails() {
    console.log("vehicle", this.prize, this.nuwheels);
  }
}

class car extends vehicle {
  constructor(numdoors) {
    super(4,150000);
    this.numdoors = numdoors;
  }
  printdescription(){
    console.log('car',this.numdoors);
  }
}

var c=new car(4);
console.log(c)
console.log(c.printdescription());



var v1 = new vehicle(4, 450000);
var v2 = new vehicle(8, 500000);

console.log(v1.nuwheels);
console.log(v1.getprize());

console.log(vehicle.prototype);

