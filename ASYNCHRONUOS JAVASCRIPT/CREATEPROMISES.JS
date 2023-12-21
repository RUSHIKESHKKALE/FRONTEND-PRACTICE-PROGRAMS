'use strict'

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolve");
    },3000);
 
});

promise.then((data)=>{
console.log(data);
})
.catch(error=>{
  console.log('error',error);
});


//console.log(promise);
