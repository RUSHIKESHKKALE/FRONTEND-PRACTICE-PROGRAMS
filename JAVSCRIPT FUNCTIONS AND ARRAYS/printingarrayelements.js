//iterating over array
var arr = [7, 8, 8, 9, 7, 5, 6, 4];

//simple iterator over array using for loop

/*for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}*/

function print(elements){
    console.log(elements);
}

arr.forEach(print);

console.log('***sum of array elements');

var sum = 0; 
var arr1 = [1, 2, 3];
arr1.forEach(getSum);
console.log(sum);

function getSum(ele) {
   sum += ele;
}