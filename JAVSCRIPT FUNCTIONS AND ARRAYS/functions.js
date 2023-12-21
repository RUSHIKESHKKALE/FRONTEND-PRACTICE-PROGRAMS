function sum(a, b) {
  //console.log(a + b);
  return a + b;
}

let result = sum(12, 45);
console.log(result);

//another fuction
function showAlert() {
  console.log("hey");
}

showAlert();

//power function
function power(d, e) {
  console.log(d * e);
}
power(5); //e value considerd as undefined here
power(5, 6, 7); //7 will be ignore here

//function hoisting
function demo() {
  console.log(x);
  var x = 10;
}
demo();

function hoist() {
  m = 45;
  console.log(m);
  var m;
}
hoist();

//variable hoisting
console.log(y);
var y = 8;

z = 9;
console.log(z);
var z;
