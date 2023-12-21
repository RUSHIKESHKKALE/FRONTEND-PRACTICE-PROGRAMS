//why callbacks 
console.log(1);
var promise=new promise(function(resole, reject){
    resolve(2);
});
promise.then(function (data){
    console.log(data);
});

console.log(3);

//output=1 3 2