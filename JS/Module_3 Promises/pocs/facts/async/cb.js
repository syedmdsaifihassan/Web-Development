// let arr = [1,2,3,4,5];

// // definition
// function square(x){
//     return x * x;
// }
// function cuber(a){
//     return a * a * a;
// }

// // function can be passed as an argument
// // implemention map js -> pre-existing -> arr map
// // it will apply the cb fn to all the elements of an array and return the new array

// function bigger(arr, cb){
//     let newArr = [];
//     for(let i=0; i<arr.length; i++){
//         let sqVal = cb(arr[i]);
//         newArr.push(sqVal);
//     }
//     return newArr;
// }

// let sqArr = bigger(arr, square);
// console.log("Square Value Array: ", sqArr);

// let qbArr = bigger(arr, cuber);
// console.log("Cube Value Array: ", qbArr);