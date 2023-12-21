var main = function () {
    // Use it to set the student and address objects
    let student, address;
    function setStudent() {
      // Update this function to set the student object (Step 1)
       
            student={
            name:'rushi',
            age:15,
            "rollno":45
     };
 }
    function setAddressAndUpdateStudent() {
      // Update this function to set the address object and set the student object again (Step 2)
        
             address={
                 City:'delhi',
                 state:'maharashtra'
             };
        student.address=address;
    }
    function deleteRollNumber() {
      // Update this function to remove 'roll no' property from the student object (Step 3)
       delete student["rollno"];
    }
    function getStudent() {
      return student;
    }
    function getAddress() {
      return address;
    }
    return {
      setStudent,
      setAddressAndUpdateStudent,
      deleteRollNumber,
      getStudent,
      getAddress
    };
  };
  

main();


  var s=function fun(){
    console.log('function');
  }
  s();
  console.log(s);

  var x={
    name:'abc',
    age:25,

  }

  x.address={
    pin:45611515,
    city:'delhi'
  }

  console.log(x);
  delete x.address;
  console.log(x);