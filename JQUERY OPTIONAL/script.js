//fetching the element by using jquery

//$('#para1').html("welcome");



var p=$('p');

p.eq(0).html('this will returns the jquery object');  //returns the jquery object

p[1].innerText='this will returns the javascript object';

var widthofdiv=$('#d1').width();

console.log(widthofdiv);
