function Student(id, name, club) {
  this.id = id;
  this.name = name;
  this.club = club;
}

Student.prototype.printDetails = function () {
  console.log(this.id, this.name, this.club);
};

var s1 = new Student(1, "Raj", "cricket");
var s2 = new Student(2, "Rohan", "Dance");
var s3 = new Student(3, "Rita", "basketball");
var s4 = new Student(4, "Reema", "music");

var arr = [];
arr[0]=s1;
arr[1]=s2;

arr[2]=s3;
arr[3]=s4

for (let i=0; i<4; i++) {
  console.log(arr[i].printDetails());
}

///assingment second question
class Person {
  constructor(name) {
    this.name = name;
  }
}

class student extends Person {
  constructor(name, rollNo, classs) {
    super(name);
    this.classs = classs;
    this.rollNo = rollNo;
  }

  getDetails() {
    return [this.name, this.rollNo, this.classs]
  }
}

class Teacher extends Person {
  constructor(name, techerlad, subject) {
    super(name);
    this.techerlad = techerlad;
    this.subject = subject;
  }

  getDetails() {
    return [this.name, this.techerlad, this.subject]
  }
}

var s1= new student('snjnsa',25,'a');
console.log(s1.getDetails())