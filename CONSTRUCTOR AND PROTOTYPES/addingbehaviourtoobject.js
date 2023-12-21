function Vehicle (numwheels, prize){
    this.numwheels=numwheels;
    this.prize=prize;
    this.getprize=function(){
        return this.prize;
    }
}
var vahicle1= new Vehicle(4,50000);
var vahicle2= new Vehicle(8,5000);

console.log(vahicle1.getprize());
console.log(vahicle2);