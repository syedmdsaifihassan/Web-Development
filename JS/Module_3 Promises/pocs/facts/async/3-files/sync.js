let fs = require('fs');
console.log("Before");
let content = fs.readFileSync("f1.txt");
console.log("content 1: "+content);
content = fs.readFileSync("f2.txt");
console.log("content 2: "+content);
content = fs.readFileSync("f3.txt");
console.log("content 3: "+content);
console.log("After");
