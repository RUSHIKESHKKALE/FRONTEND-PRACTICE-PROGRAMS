var ball=document.getElementById('ball');

var container=document.getElementById('container');

//getting width and height of ball
var ballwidth=parseInt(getComputedStyle(ball).width);
//var ballheight=parseInt(getComputedStyle(ball).height);

//width and height of container in which the ball is restricted
var conwidth=parseInt(getComputedStyle(container).width);

var conheight=parseInt(getComputedStyle(container).height);

// This is the maximum value of top and left in integers that ball can go 
var maxwidth=conwidth-ballwidth;
var maxheight=conheight-ballwidth;

// This function is for setting the initial value of ball using random()
function initializeBall(){
  ball.style.top=Math.floor(Math.random()*maxheight)+'px';
  ball.style.left=Math.floor(Math.random()*maxwidth)+'px';
}

initializeBall();

//event and function to move a ball with W A S D keys
window.addEventListener('keydown',function(event){
       let key=event.keyCode;
       let top=parseInt(ball.style.top);
       let left= parseInt(ball.style.left);
       //handling event for pressing W or w
       if(key===119 || key=== 87){
         top -=6;
         //check if ball reaches border after pressing key
         if(top<=0){
           ball.style.top=0+'px';
           return;
         }
         ball.style.top=top+'px';
       }
        //handling event for pressing S or s
        else if(key==115 || key==83){
          top += 6;
          if(top >=maxheight){
            ball.style.top=maxheight+'px';
            return;
          }
          ball.style.top=top+'px';
        }
         //handling event for pressing A or a
         else if(key ==97 || key==65){
           left -= 6;
           if(left <= 0){
             ball.style.left=0 + 'px';
             return;
           }
           ball.style.left=left+'px';
         }
          //handling event for pressing D or d
          else if(key ==100 || key==68){
            left += 6;
            if(left >= maxwidth){
              ball.style.left=maxwidth + 'px';
              return;
            }
            ball.style.left=left+'px';
          }
});


