// var a =10;
// function foo(){
// var a = 20;
// console.log(a);
// console.log(window.a);    
// }
// console.log(a);
// window.foo();

//find output for this code
// var a =10;
// function outer(){
//     var a = 20;
//     var b = 30;
//     function inner(a){
//         var a = 30;
//         console.log(a++ ,b++)
//         }
//     console.log(a, ++b);
//     inner(a);
// }
// outer();
// console.log(a++);


var a = (function(){
    return typeof arguments;
 })();
 console.log(a);

 //anothor mcq
 console.log((function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1));

  //mcq 
//   let user = {
//     firstname: 'John',
//     lastname: 'Doe',
//     getFullName: function(){
//         return function(){
//             console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
//         }
//     }    
//  }
//  user.getFullName()();

 //mcq
 let user = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        return() => {
            console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
        }
    }    
 }
 user.getFullName()();

 //another mcq question
 function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  let counter1 = makeCounter();
  let counter2 = makeCounter();
  console.log( counter1() ); 
  console.log( counter1() ); 
  console.log( counter2() ); 


  //mcq base on arrays
  //Explanation: The ‘shooters’ array is an array of functions. When you call makeArmy(), the while loop runs, and when the loop ends, the final value of i becomes 10. When you call makeArmy[0](), it runs the function that logs the value of i 10, similarly for makeArmy[5]().
  function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
      let shooter = function() {
        console.log( i ); 
      };
      shooters.push(shooter);
      i++;
    }
    return shooters;
  }
  let army = makeArmy();
  army[0]();
  army[5]();


  //new mcq
//   function makeArmy() {
//     let shooters = [];
//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;    
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

  //iife mmcq
  var Sequence = (function sequenceIIFE() {
    var current = 0;
    return {
        getCurrentValue: function() {
            return current;
        },  
        getNextValue: function() {
            current = current + 1;
            return current;
        }
   };
}());
console.log(Sequence.getNextValue());
console.log(Sequence.getNextValue());
console.log(Sequence.getCurrentValue());


//mcq
let People = function(person, age) { 
    this.person = person; 
    this.age = age; 
    this.info = function() { 
        console.log(this);  
       setTimeout(() => {  
        console.log(this.person + " is " + this.age + " years old"); 
       }, 3000); 
    } 
}  
let person1 = new People('John', 21); 
person1.info();