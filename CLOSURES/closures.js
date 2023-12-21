var i=10;

function outer(){

    var j=20;
   // console.log(i,j);

    var inner = function(){
        var k=30;
        console.log(i,j,k);
        i++;
        k++;
        j++;
    }
    return inner;
}

var inner=outer();
inner();
inner();


//another closures example
function Adder(x) {
    return function(y) {
      return x + y;
    };
  }
  var add5 = Adder(5);
  var add10 = Adder(10);
  console.log(add5(2));
  console.log(add10(2));

  //another mcq 
  var add = (function ( ) {
    var counter = 0;
    return function ( ) {
         counter += 1; 
         return counter;
  }
  })();    
  console.log(add());
  console.log(add());
  console.log(add());