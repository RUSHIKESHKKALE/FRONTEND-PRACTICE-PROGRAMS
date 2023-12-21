var student ={
    name:'rushi',
    age:25,
   "-marks":87
}

//square bracket notation in js

console.log(student.name);
console.log(student["-marks"]);


function printProperty(obj,prop){
    console.log(obj[prop]);
}

//another way to access the proerties in in objects by creating functions.;

var prop="-marks";
printProperty(student,prop);
//printProperty(student,["-marks"]);