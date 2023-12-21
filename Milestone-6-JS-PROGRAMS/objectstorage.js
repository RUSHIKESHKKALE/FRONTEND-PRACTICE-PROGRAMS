var obj={
    p1:10
}
var obj2=obj;

console.log(obj.p1);

obj2.p1=12;
console.log(obj2.p1);

console.log(obj==obj2);


obj2={
    p1:100
}
console.log(obj2.p1);
console.log(obj==obj2);
