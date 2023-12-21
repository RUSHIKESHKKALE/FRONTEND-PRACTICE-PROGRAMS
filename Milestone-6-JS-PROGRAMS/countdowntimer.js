//set countdown timer by using setinterval and clearinterval method.

var count = 10;

function timer() {
  if (count === 0) {
    console.log("Time up!!");
    clearInterval(id);
    return;
  }
  console.log(count);
  count--;
}

var id = setInterval(timer, 1000);

//Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.

function timer() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello ninjas!");
}
timer();
