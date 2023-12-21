//changing css using jquery

// $('#para1').css('color', 'blue');

// $('#para2').css('background', 'skyblue');


//to aply css on all p tags
$('p').css({
    color:'red',
    fontSize:'30px'
});

$('div').css({
    width:'100px',
    height:'100px',
    background:'red'
});

// $('div').click(function(){
//     alert('div clicked');
// })

//another way to handle event like addeventlistener
$('div').on('click',function(){
    var element=$(this);
    element.width(element.width()+10+'px');
    //alert('div clicked');
});

$('a').on('click',function(event){
    event.preventDefault();
    alert('anchor tag clicked');
})