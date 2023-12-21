//second rule for calling function explicite binding

var student = {
  name: "rushi",
};

function ask() {
  console.log(this, this.name);
}

ask.call(student);

///second subrule  in explicite binding is hard binding rule using bind method
var raj = {
  name: "raj",
  greet: function () {
    console.log("hello", this);
  },
};
var localg = raj.greet;
//localg();  //this will print window object
var localgreet = raj.greet.bind(raj);
localgreet();

//mcq
const CN = {
  name: "Coding Ninjas",
};

function print() {
  console.log(this);
}

print.bind(CN)();


//compare the outputs
var joe = {
    name: "Joe",
    hello: function (){
       console.log("hi, I am " + this.name) ;
    }
}

var globalHello1 = joe.hello.bind(joe) ;
var globalHello2 = joe.hello ;
globalHello1();
globalHello2.bind(joe)();