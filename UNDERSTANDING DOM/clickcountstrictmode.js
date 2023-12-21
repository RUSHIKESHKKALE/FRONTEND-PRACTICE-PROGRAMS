"use strict"

var click=document.getElementById('d1');

var clickcount=document.getElementById('clickcount');

var count=0;

click.addEventListener('click',function(){
   count++;
   console.log(count);
   clickcount.innerText=  count + " ";
});