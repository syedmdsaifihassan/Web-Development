let fs = require('fs');
// n number of files
let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt"];

// serially read using an async function
// start the work
// also give a cb function from ehich we can intimate you after the work is completed
console.log("before");
// output
// first file read -> cb call

function serialReader(i) {

    if(i == files.length){
        return;
    }
    fs.readFile(files[i], function cb(err, data) {
        console.log("data: "+data);
        serialReader(i+1);
    });
}
serialReader(0);
console.log("after");