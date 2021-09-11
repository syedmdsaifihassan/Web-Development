let fs = require('fs');

console.log("Before");
// Brute Force
// let fFReadPromise = fs.promises.readFile("f1.txt");
// fFReadPromise.then(cb1);
// fFReadPromise.catch(fcb);
// function cb1(content) {
//     console.log("content 1: " +content);
//     let sFReadPromise = fs.promises.readFile("f2.txt");
//     sFReadPromise.then(cb2);
//     sFReadPromise.catch(fcb);
// }
// function cb2(content) {
//     console.log("content 2: " +content);
//     let tFReadPromise = fs.promises.readFile("f3.txt");
//     tFReadPromise.then(cb3);
//     tFReadPromise.catch(fcb);
// }
// function cb3(content) {
//     console.log("content 3: " +content);
// }
// console.log("After");
// // instead giving a cb func to an async func you attach the callback to the promise returned by that func
// function fcb(err){
//     console.log("Error: ",err);
// }


let fFReadPromise = fs.promises.readFile("f1.txt");
fFReadPromise.then(cb1).then(cb2).then(cb3);

function cb1(content) {
    console.log("content 1: " +content);
    let sFReadPromise = fs.promises.readFile("f2.txt");
    return sFReadPromise;

}
function cb2(content) {
    console.log("content 2: " +content);
    let tFReadPromise = fs.promises.readFile("f3.txt");
    return tFReadPromise;

}
function cb3(content) {
    console.log("content 3: " +content);
}
console.log("After");
// instead giving a cb func to an async func you attach the callback to the promise returned by that func
function fcb(err){
    console.log("Error: ",err);
}