//set data structure in js

var myset = new Set();
myset.add(1);
myset.add(2);
myset.add(3);


console.log(myset.has(2));

myset.delete(3);
console.log(myset.has(3));
console.log(myset.size);
myset.clear();
console.log(myset.size);

arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];

 

function mergeArray(arr1,arr2){
    //Implemet your function here
    var  myset=new Set();
    
    for( var i of arr1){
        if(!myset.has(i)){
            myset.add(i);
        }
    }
    
     for( var i of arr2){
        if(!myset.has(i)){
            myset.add(i);
        }
    }
    
    var mergearray=Array.from(myset);
    return mergearray;
    
    
}
console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]