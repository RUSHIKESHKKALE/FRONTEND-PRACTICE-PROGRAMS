//let v/s var program

//var using the timeoutfunction
console.log("var using the timeoutfunction");
for(var i=1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}


//let using the timeoutfunction
console.log("let using the timeoutfunction");


for(var i=1; i<=5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}