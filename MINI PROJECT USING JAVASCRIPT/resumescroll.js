var scrollInterval;
var navMenuTags = document.querySelectorAll(".nav-menu a");
console.log(navMenuTags);

for (var i = 0; i < navMenuTags.length; i++) {
  navMenuTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    console.log(targetSectionId);

    var targetSection = document.getElementById(targetSectionId);

    scrollInterval = setInterval(function () {
      scrollvertically(targetSection);
    }, 20);
  });
}

function scrollvertically(targetSection) {
  var targetSectionCordinates = targetSection.getBoundingClientRect();
  if (targetSectionCordinates.top <= 0) {
    clearInterval(scrollInterval);
    return;
  }
  window.scrollBy(0, 50);
}

//working on skills indicators

 //1 Handle scroll event on window
 //2 Check that skills sections container is visible or not

 //3 ensure that initial width of colored skill divs is Zero initialise

 //4 Start animation on every skill increase skill width from 8 to skil

 //5 Store skill level-> HTML with the help data attribute

var progressBar = document.querySelectorAll(".skill-progress > div");
console.log(progressBar);
var skillContainer = document.getElementById("skill-container");

window.addEventListener("scroll", checkscroll);

var animationdone = false;

//we have to initialize all bar with 0 width
function initialisebar() {
  for (let bar of progressBar) {
    bar.style.width = 0 + "%";
  }
}

initialisebar();

function fillbars() {
  for (let bar of progressBar) {
   let targetwidth=bar.getAttribute('data-bar-width');
   let currentwidth=0;
   let interval=setInterval(function(){
    if(currentwidth>targetwidth){
      clearInterval(interval);
      return;
  
    }
    currentwidth++;
    bar.style.width = currentwidth + "%";
   },5)
  }
}

//you  have to check wethear skill container is visible or not
function checkscroll() {
  var cordinates = skillContainer.getBoundingClientRect();
  if (!animationdone && cordinates.top <= window.innerHeight) {
    animationdone = true;
    console.log("skill section is visible");
    fillbars();
  }else if(cordinates.top > window.innerHeight){
    animationdone=false;
    initialisebar();
  }
}
