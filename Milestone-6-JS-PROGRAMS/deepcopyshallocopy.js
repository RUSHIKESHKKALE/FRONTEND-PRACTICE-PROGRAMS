
//deep copy and shallo copy in javascript
//dont effect by deep and shallo copy in primitive datatypes
const a=10;
let b=a;
b=45;
console.log(b);
console.log(a);


//specially deep and shallo copies is helpful in ojects and array in javascript
//for checking in Object
var rushi={
    name:'rushi',
    age:22
}


//create deep copy of an object
console.log('create deep copy of an object with spread operator');

var tejas={...rushi};
tejas.name='tejas';
console.log(tejas);
console.log(rushi);

console.log('create deep copy of an object with assign operator');
var kunal=Object.assign({},rushi);

 kunal.name='kunal';
 console.log(kunal);
console.log(rushi);

//shallow copy of an object
// var soham=rushi;
// console.log(soham);
// soham.name='soham';
// console.log(soham);
// console.log(rushi);

console.log('***shallo and deep copy in arrays******');
//this is shallo copy example in javascript
var arr= [1,2,3,4,5];

var arr2=arr;
arr2.push(22);
console.log(arr);
console.log(arr2);

//now we will see how the deep copy will works
console.log('**deep copy in arr**** using spread operator*****');
var arr3=[1,2,3,4,5];

var arr4=[...arr3];
arr4.shift();
console.log(arr4);
console.log(arr3);

console.log('**deep copy in arr**** using map method*****');
var arr5=[1,2,3,4,5];

var arr6=arr5.map(el=>el);
arr6.shift();
console.log(arr6);
console.log(arr5);

console.log('*****map method in deep*****')
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var myArr= array.filter(v => v % 3 === 0);
console.log(myArr);
console.log(array);

