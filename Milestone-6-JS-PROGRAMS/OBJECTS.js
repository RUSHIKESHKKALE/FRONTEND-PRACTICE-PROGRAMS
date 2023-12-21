//objects in javascript
var student = {
  name: "rushi",
  age: 25,
  marks: 80,
  f1: function fun() {
    console.log("function in objects");
  },
};

console.log(student);
console.log(student.name);
console.log(student.age);

console.log(student.sem);
student.sem = 4;
console.log(student.sem);

//age will get deleted
delete student.age;
console.log(student);

console.log(student.f1());
//let's print all keys and values separataly in js by using obkect.keys() obkect.values() methods
console.log(Object.keys(student));
console.log(Object.values(student));


