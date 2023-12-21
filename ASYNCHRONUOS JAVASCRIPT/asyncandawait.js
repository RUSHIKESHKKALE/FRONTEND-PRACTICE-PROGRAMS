//

async function asynkresolve(){
    return 'resolve';
}


console.log(asynkresolve());


function getdata(){
    return promise.resolve('some data');
}

async function abc(){
    const data= await getdata();
    console.log(data);
}

console.log(5);
abc();

//output = 5 some data