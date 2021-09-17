//declare 

// let arr = [
//     1, 
//     false, 
//     null, 
//     "String", 
//     [1,2,3,4,5], 
//     function fn() {
//         console.log("i am a function inside an array")
//     }];
// console.log(arr);
// console.log("array fucntion call", arr[arr.length-1]());

// function definition
// function fn() {
//     console.log("i am a function")
//     return 10;
// }

//function invocation
// console.log("fucntion", fn)
// let rVal = fn();
// console.log("rval in fucntion", rVal);

// let tempArr = [10,20,30,40,50];
// let arr = [
//     1, 
//     false, 
//     null, 
//     "String", 
//     tempArr, 
//     fn];

// console.log("access", arr[arr.length-1]);
// console.log("call the function", arr[arr.length-1]());

//function in a function, memory mapping in notes
function fn() {
    fn1();
    console.log("i am a function")
    return 10;
}

function fn1() {
    console.log("i am fn1");
}

let rVal = fn();
console.log("rVal", rVal);
console.log("--------------");
console.log("rVal", fn());
