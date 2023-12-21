
//pass by value and pass by reference example 

function f1(a,b,c){
a=4;
b.push("bob");
c.first=false;
}

var x=5;
var y=["raj","rahul"];
var z={first:true};

f1(x,y,z);
console.log(x,y,z);
