var scrolledBar = document.getElementById("scrolled");

// //this function is return maximum of following

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.body.offsetHeight,
    D.body.clientHeight
  );
}

// console.log(D.body.scrollHeight==D.body.clientHeight);

var docHeight = getDocHeight();
var windoHeight = window.innerHeight;

window.onresize = function (e) {
  docHeight = getDocHeight();
  windoHeight = window.innerHeight;
}

// This function uses a for loop for individual progress bars. You can modify it so that it applies to the whole skill section at once

function setScroll() {
  var scrolled = Math.floor(
    (window.scrollY / (docHeight - windoHeight)) * 100
  );

  scrolledBar.innerText = scrolled;
}

//adding event listenet after scroll
window.addEventListener('scroll',setScroll);