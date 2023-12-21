
//timing event in javascript

var sec=1;
function sayhello(){
    console.log('after',sec);
    sec++;
    if(sec==0){
       // stop
       clearInterval(id);   //this method is use to stop interval
    }
}

//this code execute only once after certain time interval.
// setTimeout(() => {
//     console.log('after');
// }, 5000);

var id= setInterval(sayhello,1000);  //this code will get execute again and again 