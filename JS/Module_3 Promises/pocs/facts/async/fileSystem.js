let fs = require('fs');
// let content = fs.readFileSync("cb.js");
// a js dev can't create an asynchronous fn
// environment will give it to you
console.log("Before");
fs.readFile("cb.js", cb)

function cb(err, data) {
    if(err){
        console.log("Error: " +err);
    }else{
        console.log("content: " +data);
    }
}
console.log("After");