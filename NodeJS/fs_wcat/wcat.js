let path = require('path');
let fs = require('fs');

/*-------------------*/
let displayObj = require("./commands/displayFunc");
let sObj = require("./commands/sFunc");
let nObj = require("./commands/nFunc");
let bObj = require("./commands/bFunc");

//main input
let inputArr = process.argv.slice(2);
let command = inputArr;

let cmd = [];
let filesArr = [];

for(let i=0; i<inputArr.length; i++) {
    let fChar = inputArr[i].charAt(0);
    if(fChar == '-'){
        cmd.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}
console.log(cmd);
console.log(filesArr);

if(cmd.length == 0){
    command = "display";
}
let command1;

for(let i=0; i<3; i++){
    if((command1=="-b" && command[i]=="-n") || (command1=="-n" && command[i]=="-b")) continue;
    else{
        command1 = command[i];
        switch (command1) {
            case "display":
                displayObj.displayFxn(filesArr);
                break;
            case "-s":
                sObj.sFxn(filesArr);
                break;
            case "-n":
                nObj.nFxn(filesArr);
                break;
            case "-b":
                bObj.bFxn(filesArr);
                break;
            default:
                console.log("---Enter right command---");
                break;
        }
    }
}

/*-------------------------------*/

/*

let inputArr = process.argv.slice(2);
// let filesArr = inputArr;
// console.log(filesArr);

let cmd = [];
let filesArr = [];

for(let i=0; i<inputArr.length; i++) {
    let fChar = inputArr[i].charAt(0);
    if(fChar == '-'){
        cmd.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}
console.log(cmd);
console.log(filesArr);

for(let i = 0; i < filesArr.length; i++){
    let exist = fs.existsSync(filesArr[i]);
    if(exist == false) {
        console.log("file doesn't exist")
    }
}

// convert big line breaks into a singular line break
let content = "";

if(cmd[0]=='-s'){
    for(let i = 0; i < filesArr.length; i++){
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
}
content = content.replace(/(\r\n|\n|\r)/gm, "<br>");
content = content.split("<br>");
// console.log(content);
//remove empty elements in content array
content = content.filter(function (e) {return e != "";});
// console.log(content);
let contentSLB = content.join("\n\n");
console.log("-s, single line break !")
console.log(contentSLB);

// give numbering to all the lines 
content = "";
if(cmd[1]=='-n'){
    for(let i = 0; i < filesArr.length; i++){
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
}
content = content.replace(/(\r\n|\n|\r)/gm, "<br>");
content = content.split("<br>");
// console.log(content);
//remove empty elements in content array
content = content.filter(function (e) {return e != "";});
// console.log(content);

for(let i=0, c=1; i<content.length; i++, c++) {
    content[i] = c+". " + content[i];
}
// console.log(content);
let contentNumbering = content.join("\n\n");
console.log("-n, numbering !")
console.log(contentNumbering);

// give numbering to non-empty lines 
content = "";
if(cmd[2]=='-b'){
    for(let i = 0; i < filesArr.length; i++){
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
}
content = content.replace(/(\r\n|\n|\r)/gm, "<br>");
content = content.split("<br>");
// console.log(content);
//remove empty elements in content array
// content = content.filter(function (e) {return e != "";});
// console.log(content);

for(let i=0, c=1; i<content.length; i++, c++) {
    content[i] = c+". " + content[i];
}
// console.log(content);
let contentNumberingEmptyLines = content.join("\n\n");
console.log("-b, numbering empty lines too !")
console.log(contentNumberingEmptyLines);

*/