var box = document.getElementById("outer");

//mouse over and out enevt

box.addEventListener("mouseover", function () {
    console.log("mouse over");
});

box.addEventListener("mouseout", function () {
  console.log("mouse out");
});

//keypress event in js

var searchinput=document.getElementById('input');

searchinput.addEventListener('keydown',function(event){
    console.log("key press",event.keyCode);
    if(event.keyCode===73){
        box.innerHTML='i love you';
    }
});

//gaming point of veiw we can set addEventListener on document
document.addEventListener('keydown',function(){
    console.log('key down on document');
});


