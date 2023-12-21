//use of prototypes

function vehicle(numwheels, prize){
   this.numwheels=numwheels;
   this.prize=prize;
}

//we can add behaviour to the objects using prototypes
vehicle.prototype.getprize=function(){
    return this.prize;
}

vehicle.prototype.getnumwheels=function(){
    return this.numwheels;
}

//we can add properties to the object at runtime 
vehicle.prototype.color='red';

var v1=new vehicle(4,1200000);
var v2= new vehicle(8,4500000);


console.log(v1.getprize());
console.log(v1.getnumwheels());
console.log(v2.getnumwheels());

v1.color = 'white';
console.log(v1.color);
console.log(v2.color);

console.log(v1.hasOwnProperty('color'));
console.log(v2.hasOwnProperty('color'));

console.log(vehicle.__proto__==vehicle.prototype);


//mcq

function Person(age) {
    this.age = age;
    }
    var p1 = new Person(9);
    console.log(Person.hasOwnProperty("name"));
