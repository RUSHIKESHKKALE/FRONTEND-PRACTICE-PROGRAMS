//mcq base on binding rules
const billy = {
    name: "Billy Jol", 
    outer: function() {
         function inner(){
         console.log(this);
       }     
       inner();
    }
  }
  billy.outer.bind();
  

  //prototype mcq
  function Person(name) {
    this.name = name;
  }
  var p1 = new Person("Joy");
  var p2 = new Person("Julie");
  
  Person.prototype.getName = function() { return this.name };
  
  p1.getName = function() {return ‘John’};
  console.log(p1.getName() + " is friend with " + p2.getName());
  p2.getName = function() {return ‘Jonson’};
  
  function Student(id, name, club){
    this.id = id ;
    this.name = name ;
    this.club = club ;
    
}

 Student.prototype.printDetails = function(){
        console.log(this.id, this.name, this.club);
    };

   var s1=new Student(1,'Raj','Cricket');
   var s2=new Student(2,'Rohan','Dance');
   var s3=new Student(3,'Rita','Basketball');
   var s4=new Student(4, “Reema”, “Music”);

    console.log(s1.printDetails());
