var student={
    name:'rushi',
    age:10,
    marks:90
}

for(var keys in student){
    console.log(keys,student[keys]);
}


//using backtik we can also print keys and values


for(var keys in student){
    console.log(`the key is ${keys} and value is ${student[keys]}`);
}

function print(prop){
    console.log(student[prop])
}
var prop="name";
print(prop);