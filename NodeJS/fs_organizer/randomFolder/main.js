
// let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");

// input from main
// input -> node main.js tree "path"
// Print -> tree command executed with path ""
// input -> node main.js organize "path"
// Print -> organize command executed with path ""
// input -> node main.js help
    // Print -> list of all commands
        // 1. node main.js tree "path"
        // 2. node main.js help "path"
        // 3. node main.js organize "path"

let fs = require('fs');
let path = require('path');

//main input

let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch (command) {
    case "tree":
        treeObj.treeFxn(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeFxn(inputArr[1]);
        break;
    // case "help":
    //     helpObj.helpFxn();
    //     break;
    default:
        console.log("---Enter right command---");
        break;
}