/*function multiply(x,y){
    return x*y;
} */

var multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 5));

var double = (x) => 2 * x;

console.log(double(5));

var add = (a, b) => a + b;

console.log(add(78, 2));

//working of arrow function with the this keyword
function person(name){
  this.name=name;
   console.log(this);
  // setTimeout(function(){
  //   console.log(this);
  // });

  setTimeout(()=>{
      console.log(this);
    });
}

var p = new person('Rushi');