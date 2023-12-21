//arrays in js

var arr=['rushi', 10, true];
console.log(arr);
console.log(arr[0]);
//push
var pusharray=arr.push('sony');
console.log(pusharray);

//unshift
var arrunshift=arr.unshift(10);
console.log(arrunshift);
console.log(arr);


//pop
var arrpop=arr.pop();
console.log(arrpop);
console.log(arr);
//shift
var arrshift=arr.shift();
console.log(arrshift);
console.log(arr);


//indexOf

console.log(arr.indexOf('rushi'));
//includes
console.log(arr.includes('rushi'));

var pusha=arr.push(['t','u']);
console.log(pusha);



//splice
arr.splice(2,0,'teja','rupa');
console.log(arr);


//slice

console.log(arr.slice(2));

//concat method in arrays in javascript
var arr2=[4,5,6];
var newarr=arr.concat(arr2);
console.log(newarr);

//mcq check
var arr3=['c','v','l','s'];
arr3.splice(2,'o','p');
console.log(arr3);

//form method in js
var code=Array.from('codingninjas');
console.log(code);
console.log(code.reverse());

var str='risjo';

function re(){
    return str.split('').reverse().join('');
}
console.log(re());

console.log(str.split('').reverse().join(''));

//loop over the array
var student=[
    'rani',
    'shyam',
    'sundar',
    'meera'
]

for(var i=0; i<student.length; i++){
    console.log(`the roll no : ${i+1} : ${student[i]}`)
}
//for of loop
for(var i in student){
    console.log(`the roll no : ${parseInt(i)+1} : ${student[i]}`)
}
//for of loop
for(var i of student){
    console.log(`the roll no  : ${i}`)
}


//first five even element example
const randomarr = [11, 6, 8, 14, 58, 45, 78, 98, 77, 55, 66, 44];
var evenarr = [];
for (var i of randomarr) {
  if (i % 2 !== 0) {
    continue;
  }
  if (evenarr.length === 5) {
    break;
  }
  evenarr.push(i);
  console.log(evenarr);
}


///batch student problem in js problem using rest operator 

const batchjan=['a','b','c'];
const batchfeb=['d','e'];
const batchmarch=['f','g'];
const newbatch=[];

function addbatchstudent(batch,...rest) {
    for(var i of rest){
        batch.push(i);
    }
   
    console.log(batch);
}

addbatchstudent(batchjan,'rushi','komal');

var new1batch=batchjan;
console.log(new1batch);
new1batch.push(10);
console.log(batchjan);

var new2batch=[...batchjan];
console.log(new2batch);
new2batch.splice(2);
console.log(new2batch);
console.log(batchjan);








