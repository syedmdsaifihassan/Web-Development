// empty array
// let arr = [];
// console.log(arr);
// loops
// let arr = [1, 3, 4, 5, 6];

// Reverse of an array

// let input = [1,2,3,4,5];
// let n = input.length;
// let c = Math.floor(n/2);
// let l = 0;
// let r = n-1;
// for(let i=0; i<c; i++){
//     let temp = input[l];
//     input[l] = input[r];
//     input[r] = temp;
//     l++;
//     r--;
// }
// // for(let i = 0; i < input.length; i++){
// //     process.stdout.write(input[i]+", ");
// // }
// console.log(input);

// for(let i = 0; i < arr.length; i++) {
    // typecasting
// // console.log(i +" : "+ arr[i]); 
// no typecasting
// console.log(i ," : ", arr[i]);
// }
// push pop  -> add/remove Last
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(18)
// console.log(arr);
// unshift shift -> add/remove First
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(18)
// console.log(arr);
// slice  -> gives a copy of a subarray
// starting Idx, endingIdx-1
// let slicedArr = arr.slice(1,4);
// let slicedArr = arr.slice(1);
// console.log("slicedArr", slicedArr);
// console.log("arr",arr);
// splice  -> deletes any number 
// of elements from an index
// console.log("arr",arr);
// let removedElems=arr.splice(2,3);
// console.log("removedElems",removedElems);
// console.log("arr",arr);
// indexOf -> idx for an element in an array
//  else -1 
// let idx = arr.indexOf(11);
// console.log("idx",idx);
// includes-> it check if 
// an element is inside an array


// Union

// let arr1 = [1,2,3];
// // console.log(a);
// let arr2 = [100,2,1,10];
// // console.log(b);
// let n = arr1.length;
// let m = arr2.length;
// for(let i=0; i<m; i++){
//     let c = 0;
//     for(let j=0; j<n; j++){
//         if(arr2[i]!=arr1[j]){
//             c++;
//         }
//         if(c==n){
//             arr1.push(arr2[i]);
//         }
//     }
// }
// console.log(arr1);