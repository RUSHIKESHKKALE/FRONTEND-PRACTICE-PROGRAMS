
function car(){

    console.log(this);
 }
 new car();
 

function vahicle(name){
   this.name=name;
   console.log(this);
}
new vahicle('rushi');


//another example
function Student(name){
    this.name = name ;
    console.log(this) ;
}
var student1 = new Student("Raj") ;
console.log(student1.name);
//Explanation: The ‘new’ keyword creates a new object. The value of ‘this’ inside Student() becomes this newly created object. When Student() is called, it sets this.name equal to Raj. 
