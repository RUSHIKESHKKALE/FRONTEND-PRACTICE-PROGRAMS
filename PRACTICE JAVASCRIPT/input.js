var number=document.getElementById('number');

function fecthnumber(){
    if(number.value<=10){
        alert('u enter wrong number');
    }
}

var button=document.getElementById('btn');
button.addEventListener('click',fecthnumber);
