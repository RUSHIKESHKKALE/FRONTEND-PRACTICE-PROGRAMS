//splice function in javascript
var arr = [4, 5, 6, 8, 7, 9];
arr.splice(2); //from index 2 all elements gets deleted
console.log(arr);
arr.splice(2, 0, 8, 9, 7, 6); //from index two all emements will be inserted
console.log(arr);
arr.splice(2, 2, 23, 56); //from index 2 two elements will be deleted and 23 56 are inserted
console.log(arr);


console.log('*****fruits array example********');
var fruits = ['banana', 'apple','kiwi','strawberry'];
fruits.splice(1,0,'orange');
console.log(fruits);

fruits.splice(0,0,'lemon');
console.log(fruits);