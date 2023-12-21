 //document.getElementById selector
 var heading1=document.getElementById("one");
 heading1.style.backgroundColor='cyan';
 heading1.style.color='red';
 heading1.style.opacity='0.8';
 heading1.innerText='hey';
 
 //document.getElementsByClassName selector
var para=document.getElementsByClassName("para");
para[0].style.backgroundColor='blue';
para[0].innerText='this is ocument.getElementsByClassName selector';


 //document.getElementsByTagName selector
 var heading3=document.getElementsByTagName("h3");
 heading3[0].style.backgroundColor='aqua';
 heading3[0].style.color='red';

 //document.querySelectorAll selector
 var heading2=document.querySelectorAll(".heading");
 heading2[1].style.color='yellow';
 heading2[1].style.backgroundColor='gray';
 