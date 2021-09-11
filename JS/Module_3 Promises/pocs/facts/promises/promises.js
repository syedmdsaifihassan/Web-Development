// state 
// final 

let fs = require("fs");

function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })
    })
}

console.log("Before");
let fileReadPromise = myPromisiedFsReader("f1.txt");
// state -> pending 
console.log("23", fileReadPromise);

// 1sec -> async (1sec)
// setTimeout(function () {
//     console.log("11", fileReadPromise);
// }, 1000);
// function call -> then is asynchronous
// this will always run async
function scb(data){
    console.log("hello", data);
    return "Hello, value returned from scb";
}
fileReadPromise.then(scb).then(scb2);
function scb2(data){
    console.log("37", data);
}

setTimeout(function(){
    console.log("41", thenNpromise);
}, 2000);

console.log("44");
let thenNpromise = fileReadPromise.then(scb);
// thenNpromise -> rules
// function fcb(data){
//     console.log("hello", err);
// }
// fileReadPromise.catch(fcb);
console.log("51");

console.log("after");