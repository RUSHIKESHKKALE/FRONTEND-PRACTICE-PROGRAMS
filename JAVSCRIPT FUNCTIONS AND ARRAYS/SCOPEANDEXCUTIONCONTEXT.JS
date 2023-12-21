//gobal and local scope variable in js example progarm

var name = "rushi";

function scopedemo() {
  //var name = "manisha";
  console.log(name);
}

scopedemo();
console.log(name);

//execution context
function c() {
  console.log("inside c");
}
function b() {
  c();
  console.log("inside b");
}
function a() {
  b();
  console.log("inside a");
}

a();
console.log("this is glogal context");

//mcq code
console.log("*********mcq checking***********");
function multiply(a, b) {
  return a * b;
}
console.log(multiply);
