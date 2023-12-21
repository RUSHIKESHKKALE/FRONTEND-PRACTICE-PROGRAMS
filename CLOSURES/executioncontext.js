//globle and local execution context.
var a=10;

function outer(){
    var a=20;
    var b=40;

   function inner(){
    var a=100;
    console.log(a,b);
}
   
   inner();
    console.log(a,b);
}
outer();
console.log('glogal');