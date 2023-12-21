//console.log("hello world");

//difference between var let const
var a = 20;
var a = 56;
console.log(a);

console.log(typeof a);

let b = 99;
//let b = 25;
b = 25;
console.log(b);

const c = 66;
//c = 45;
console.log(c);

console.log(5 + "b");
console.log(6 * "b");

console.log(null == undefined);
console.log(null === undefined);

let d = null;
let e = undefined;
if (d) {
  consoke.log("first");
} else if (e) {
  console.log("second");
} else {
  console.log("third");
}

for (var i = 0; i < 5; i++) {
  if (i === 2) {
    break;
  }
  console.log("hello");
}
