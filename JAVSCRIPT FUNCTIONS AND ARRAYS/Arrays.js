var arr1 = [1, 4, 8, 9, 7, 7];
arr1[0] = 78;
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[7]);
arr1[8] = 89;
console.log(arr1);
console.log(arr1[6]);
console.log(arr1.indexOf(7));
console.log(arr1.lastIndexOf(7));

console.log("*******second way to defining array in javascript***********");

var arr2 = new Array(5); //here 5 will be consider as length of the array.
console.log(arr2);
console.log(arr1.lastIndexOf(7));

console.log("*******third way to defining array in javascript***********");
var arr3 = new Array(4, 5, 6, 7, 8, 90);
console.log(arr3);
arr3[7] = 55;
arr3.push(100);
console.log(arr3.indexOf(0));

console.log(arr3);
console.log(arr3.length);

console.log("**mcq purpose***");

var fruits = ["Red", "Orange", "Blue", "Green"];

console.log(fruits.shift());
console.log(fruits);

var myarray = [45, "ninju"];
console.log(myarray);
console.log(myarray.concat(myarray));
