function createobj(name, age){
    // var students={};
    // students.name=name;
    // students.age=age;
    // return students;
    this.name=name;
    this.age=age;
    this.getname=function(){
        return this.name;
    }
}

var s1=new createobj('rudhi',45);
var s2=new createobj('abc',41);

console.log(s1.name);


///practice
class Person {
    constructor(name) {
        this.name = name;
    }
 }
  
 //Define Student and teacher class here
 class Student extends Person{
   constructor( rollno, batch) {
     super(name);
     this.batch=batch;
     this.rollno=rollno;
   }

   getDetails() {
    console.log(this.name, this.rollno, this.batch);
   }
   
}

class Teacher extends Person{
  constructor(teacherId, subject) {
    super(name);
    this.teacherId = teacherId;
    this.subject = subject;
  }
  
  getDetails() {
    console.log(this.name, this.teacherId, this.subject);
   }
   
}


var s1= new Student('abc',12,'a');
console.log(s1);