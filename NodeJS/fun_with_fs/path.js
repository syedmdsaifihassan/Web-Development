let path = require('path');
let fs = require('fs');

// input
let inputArr = process.argv.slice(2);
// console.log(inputArr);
let fileName = inputArr[0];
let content = inputArr[1];
// console.log("fileName: ", fileName);
// console.log("content: ", content);

// current path of directory
let currentPath = process.cwd();
// console.log("currentPath: ", currentPath)

// path -> paths -> platform independent
let pathJoined = path.join(currentPath, "abc", "def", "ghi")
console.log("pathJoined: ", pathJoined)

let filePath = path.join(currentPath, "dir1", fileName)
console.log("filePath ", filePath)
fs.writeFileSync(filePath, content);