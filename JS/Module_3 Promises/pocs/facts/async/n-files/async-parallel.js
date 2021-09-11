let fs = require('fs');
// n number of files
let files = ["./f1.txt", "./f2.txt", "./f3.txt", "./f4.txt", "./f5.txt"]

console.log("Before")
// parallely read using an async function
// start the work
// also give a cb function from ehich we can intimate you after the work is completed

for(let i = 0; i < files.length; i++){
    fs.readFile(files[i], function(err, data){
        console.log("content: " +data);
    })
}

console.log("After")