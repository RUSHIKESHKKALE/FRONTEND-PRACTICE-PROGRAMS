console.log("***********if else in javascript***********");
let num = 30;
if (num < 10) {
  console.log("number is lesser");
  console.log("number is 30");
} else {
  console.log("number is greater than 10");
}

//email varification program in js
//input an email
//length of email is >11
//after . only 2 or 3 character will allow
//min 3 character between @ and .

const email = prompt("enter your email");

const emailLength = email.length;

const atIndex = email.lastIndexOf("@");

const dotIndex = email.lastIndexOf(".");

const emailLastindex = email.length - 1;

//cheching conditions for invalid emails

if (
  emailLength < 11 ||
  emailLastindex - dotIndex < 2 ||
  dotIndex - atIndex < 3
) {
  console.log("invalid email");
}

console.log("*********mcq purpose**********");
let x = 0;
if (x++) {
  console.log("x is 1");
} else if (x == 0) {
  console.log("x is 0");
} else {
  console.log("condition are false");
}
