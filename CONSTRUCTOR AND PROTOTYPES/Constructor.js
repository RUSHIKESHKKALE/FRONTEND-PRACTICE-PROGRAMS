//creates objects using constructor function

function createsobject(name, age, marks ){
    //var students={};
    this.name=name;
    this.age=age;
    this.marks=marks;
    console.log(this);
    //return object
}


var student1 = new  createsobject('rushi', 15, 88);
var student2 =   createsobject('somu', 18, 98);
console.log(student1);
console.log(student2);