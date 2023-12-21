var student={
    name:'rushi',
    age:15,
    marks:90,
     address:{
        city:'delhi',
        pin:443402
    }
}

//we can use dot as well as sqaure bracket notation here both are works.
console.log(student);
console.log(student.address);
console.log(student.address.city);
console.log(student.address['pin']);
console.log(student['address']['pin']);
