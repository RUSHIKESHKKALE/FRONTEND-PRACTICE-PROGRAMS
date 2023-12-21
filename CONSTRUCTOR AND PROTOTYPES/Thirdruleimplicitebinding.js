var raj={
    name:'raj',
    greet:function(){
        console.log(`'hello'${this.name}`);
    }
}

raj.greet(); //this is implicite binding

console.log(raj);

for(let keys in raj){
    console.log(`${keys}:${keys}`)
}
