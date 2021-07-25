/* Question
You are given path of a directory It contains n number of text files and n number of directories . Write code in nodejs to read all all the files and create a new file in that directory named summary.txt and dump all the content from these files.
*/

let path = require('path');
let fs = require('fs');

let currentPath = process.cwd();
// console.log("currentPath: ", currentPath)
let pathGiven = path.join(currentPath, "Test")
// console.log("pathGiven: ", pathGiven)
let pathSummary = path.join(pathGiven, "Summary.txt")
let newFile = "";
fs.writeFileSync(pathSummary, newFile);
let files = fs.readdirSync(pathGiven);
// console.log("files: ", files);

for(let i=1; i<files.length; i++) {

    let pathI = path.join(pathGiven, files[i])
    let statsOfPath = fs.lstatSync(pathI);
    // console.log("stats", statsOfPath);
    // console.log(files[i]+"isFile?", statsOfPath.isFile());
    // console.log(files[i]+"isDirectory?", statsOfPath.isDirectory());

    if(statsOfPath.isFile() == true) {
        let fileContent = fs.readFileSync(pathI);
        newFile += fileContent;
    }
    else {
        // contentDir();
    }
}

// function contentDir() {

// }

fs.writeFileSync(pathSummary, newFile);