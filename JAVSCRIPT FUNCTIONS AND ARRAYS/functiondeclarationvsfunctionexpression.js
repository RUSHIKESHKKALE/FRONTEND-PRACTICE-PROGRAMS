//function declaration v/s function expression

//function hoisting

console.log(facto(5));

function facto(n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
}

//variable hoisting

console.log(factorial);

var factorial = function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
};

//console.log(fact); this is give an error in case of the function expression.
