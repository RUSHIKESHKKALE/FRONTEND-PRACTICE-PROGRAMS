//default parameters
function sum(num1=0, num2=0){
    console.log(`sum of num1 and num2 is: ${num1 + num2}`);
}

sum(4,5,8);

//destructuring in function

function print(a,b,c,...rest){
    console.log(a,b,c,rest);
}

print(45,78,9,7,8,9,7,5,4,6);


//return keyword in js

function sqared(number){
    return number*number;
    console.log(number*number);
}

const res=sqared(6);
console.log(res);

sqared(5);

//multiple value returning
function returnmultivalue(){
    return 4,5,8;
    console.log(number*number);
}
// var rres=returnmultivalue();
// console.log(rres);

// //nothing returning from function
// function calculate(length*breagth){
//     const area=length*breagth;
    
// }

// const area  = calculate(5,5);
// console.log(area);

