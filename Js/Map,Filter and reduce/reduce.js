const arr = [5, 1 ,3 ,2, 6];

// sun or max 
function findSum(arr){
    let sum =0;
    for(let i=0;i <arr.length; i++){
        sum = sum + arr[i];
        
    }
    return sum;
}

//console.log(findSum(arr));

//using the reduce function

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
//the 0 is the initial value for the current
//console.log(output);

//Finf the max of array

function findMax(arr) {
    let max = 0
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMax(arr));

const outPut = arr.reduce(function(acc, curr){
    acc = 0;
    if(acc < curr){
        acc = curr;
    }
    return acc;
}, 0);

console.log(outPut);
