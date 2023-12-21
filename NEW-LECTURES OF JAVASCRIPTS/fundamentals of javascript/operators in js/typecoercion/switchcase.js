//switch case example 
const number = Number(prompt('enter any number'));

switch(number){
    case 1:
     console.log("jan");
        break;
        case 2:
       console.log("feb");
        break;
          case 3:
         console.log("march");
         break;
        case 4:
      console.log("april");
       break;
       
        case 5:
        console.log("may");
        break;
        case 6:
        console.log("jun");
        break;

        case 7:
        console.log("july");
        break;
        case 8:
         console.log("august");
        break;
        case 9:
        console.log("sept");
        break;
        case 10:
        console.log("octo");
       break;
       case 11:
        console.log("nov");
        break;
        case 12:
       console.log("dec");
       break;
       default:
        console.log('you enter invalid number');
        break;
}

console.log('outsite the');

console.log('*****switch case  using boolean conditions*******');
const x=25;
switch(true){
    case(x>10 &&x<20):
    console.log('x is less than 20 and greater than 10');
    case(x<50 && x>20 ):
    console.log('x is less than 50 and greater than 20 ');

}

console.log('******ternary operator in js********');
/*checking number is even or odd */
let num=5;

num%2 ===0 ? console.log('number is even') :console.log('number is odd');

var i=11;
var j= --(i++);
console.log(j);