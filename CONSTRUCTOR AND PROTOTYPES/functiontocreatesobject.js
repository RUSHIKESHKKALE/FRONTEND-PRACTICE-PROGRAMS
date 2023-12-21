// create a function to create multiple object

function createobject(name, age, marks){
    
    var student={};
    student.name=name;
    student.age=age;
    student.marks=marks;

    return student;
}

var student1=createobject('rhi',15,88);
var student2=createobject('abc', 16, 88);
console.log(student1);
console.log(student2)