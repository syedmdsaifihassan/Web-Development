// ----Date (24th July 2021)----

// implementation -> files/folder interact
//                        /directory

// -----------------files -> read/ write/ update/ delete-----------------
let fs = require('fs');
let path = require('path');
/*
// read
let content = fs.readFileSync("f1.txt")

// Buffer -> video, audio, text
console.log("content: ", content)
// + -> concatenate String => text
console.log("content: " + content)

// writeFileSync
// if file doesn't present, it created the file and put the content
// if file does present, it override the content
// fs.writeFileSync("abc.txt", "New file created and put the content/or override by -writeFileSync-")

// update the file content
// fs.appendFileSync("abc.txt", "Updated the content by using -appendFileSync-")

// delete the file by passing its path
fs.unlinkSync("abc.txt");
console.log("FIle removed")
*/

// -------------------------------directory-------------------------------
// create
// fs.mkdirSync("myDirectory");

// delete
// fs.rmdirSync("myDirectory");

// path -> check does it exist or not
// let doesExist = fs.existsSync("fs1.js");
// console.log("This path exist?", doesExist);

// path -> belongs to a directory or a files
// let statsOfPath = fs.lstatSync("fs.js")
// // console.log("stats", statsOfPath);
// console.log("isFile?", statsOfPath.isFile());
// console.log("isDirectory?", statsOfPath.isDirectory());

// directory -> content
// let address = "//Users//syedmdkaifihassan//Desktop//PepCoding//Web Dev/JS";
// let content = fs.readdirSync(address);
// console.log("directory content: ", content)


// ----Date (25th July 2021)----

// copy
// firstParam -> srcFilePath, destFilePath

// let srcPath = "//Users//syedmdkaifihassan//Desktop//PepCoding//Web Dev//NodeJS//task.js";
// let destDir = "//Users//syedmdkaifihassan//Desktop//PepCoding//Web Dev//NodeJS//WD";
// return last portion of (path)
// let baseName = path.basename(srcPath);
// let pathNew = path.join(destDir, baseName);
// fs.copyFileSync(srcPath, pathNew);
// console.log("file copied");

