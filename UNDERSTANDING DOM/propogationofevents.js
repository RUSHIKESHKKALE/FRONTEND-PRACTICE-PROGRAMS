var outer=document.getElementById('outer');
outer.addEventListener('click',function(){
    alert('outer div');
   
});


var inner=document.getElementById('inner');
inner.addEventListener('click',function(event){
    alert('inner div');
    event.stopPropagation();
});

