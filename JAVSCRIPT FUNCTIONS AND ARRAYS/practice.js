//practice in javascript
//weekday program
var weekday = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thirsday",
  "friday",
  "saterday",
];

function returnday(num) {
  if (num < 1 || num > 7) {
    return null;
  } else {
    return weekday[num];
  }
}

var result = returnday(1);
console.log(result);

console.log('******duplicate arry function********');

//duplicate array by using concat method

var fruits=['apple', 'banana','kiwi', 'orange'];

function duplicate(fruits){
    var dup=[];
    for(var i=0; i<fruits.length;i++){
        dup.push(fruits[i]);
    }
    return fruits.concat(dup);
}

console.log(duplicate(fruits));

/*rotate array in left direction */

var arr=[1,2,3,4,5,6];

function rotateleft(arr){
  let first=arr.shift();
  arr.push(first);
  return arr;
}
console.log(rotateleft(arr));


//destructuring in javscript
console.log('destructuring in javscript');
function print(a,b,...c){
  console.log(a,b, c);
}

print(4,5,6,5,6,58,9,5);