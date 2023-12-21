//function within function and execution context and scope of variables

var name = "global";

function outer() {
  var name = "outer";
  function inner() {
    var name = "inner";
    console.log(name);
  }
  inner();
  console.log(name);
}

//inner();
outer();
console.log(name);
console.log(
  "this is a example of scope execution context and flow of the program"
);
