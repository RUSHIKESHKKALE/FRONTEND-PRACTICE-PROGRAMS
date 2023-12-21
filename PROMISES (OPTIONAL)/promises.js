
//creating and using promises
var userlogin=true;

//wrapping the promise in the function and then return the promise
 
function chekedUserLoedIn(){
    var promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
           if(userlogin){
               resolve('user is loged in');
           }else{
               reject('user is not loged in');
           }
           
        },1000);
   });
   return promise;
}

setTimeout(()=>{
    userlogin=false;
},500);


chekedUserLoedIn().then((sucess)=>{
console.log(sucess);
}).catch((unsucess)=>{
    console.log(unsucess);
})