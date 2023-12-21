function ask(){
    console.log(this,this.name);
}

ask();  //this is default binding rule if we dont use any binding rule then it is set as default binding rule

//another example of default binding
var juliet = {
    name: "Juliet",
    hello: function(){
        console.log("Hi, I am " + this.name);
    }
}
var globalHello = juliet.hello;
globalHello();