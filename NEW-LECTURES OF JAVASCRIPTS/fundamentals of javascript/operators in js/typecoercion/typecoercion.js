/*type corcion in javascript */
console.log("***********type corcion in javascript*********");
let fullname = "rushi" + " " + "kale";
console.log(fullname);

let a = "55" + 5;
console.log(a);
console.log(typeof a);

/*how minus works with the string */
let num = "55" - 10;
console.log(num);
console.log(typeof num);

let mul = "5" * 8;
console.log(mul);
console.log(typeof mul);

console.log(true + true);
console.log(false + false);

/*type conversion in javascript*/
/*convert to string */
console.log("**********type conversion in javascript********");
console.log("*********converting into a string******");
let number = 122;
let str = String(number);
console.log(str);
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log((100).toString());
console.log(true.toString());
//console.log((null).toString());

/*convert to a number */
console.log("********convert into number**********");
console.log(Number("123"));
console.log(Number("rushi"));
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

console.log(Number(10.5) + 5);

//unaray + operator work on variable
let d = "125";
console.log(+d);

//parsefloat()
console.log("*******parsefloat() method");

console.log(parseFloat("123.45pk"));
console.log(parseFloat("123.45.45pk"));

//parseInt()
console.log("*******parseInt() method");
console.log(parseInt("456.123kl"));

/*convert to a boolean */
console.log("*********boolean converting*********");
console.log(Boolean(0));
console.log(Boolean(125));
console.log(Boolean("yyhuhhuiu"));
console.log(Boolean(null));
