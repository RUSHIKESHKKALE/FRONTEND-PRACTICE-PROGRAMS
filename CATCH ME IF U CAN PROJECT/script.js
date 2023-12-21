var box = document.getElementById("box");

var viewwidth = window.innerWidth;
var viewheight = window.innerHeight;

//updtate the viewport height and width dinamically
window.addEventListener("resize", function () {
  viewwidth = window.innerWidth;
  viewheight = window.innerHeight;
});

//applying the mouseover event on box when we hovor on the box it will changes the its position

box.addEventListener("mouseover", function () {
  var boxattr = box.getBoundingClientRect();

  var pos = getNewPosition(boxattr.width, boxattr.height);

  box.style.top = pos.y + "px";
  box.style.left = pos.x + "px";
});

function getNewPosition(boxwidth, boxheight) {
  // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
  var newX = Math.floor(Math.random() * viewwidth + 1 - boxwidth);

  var newY = Math.floor(Math.random() * viewheight + 1 - boxheight);
  //these will satisfy that ball does not move out the top and left direction

  if (newX < 0) {
    newX = 0;
  }
  if (newY < 0) {
    newY = 0;
  }
  return {
    x: newX,
    y: newY
  };
}
