let path = require('path');
let fs = require('fs');

let inputArr = process.argv.slice(2);

let fName = inputArr[0];
fs.mkdirSync(fName);
console.log("Directory Created", fName)

let currentPath = process.cwd();
let pathJoined = path.join(currentPath, fName)
console.log("pathJoined: ", pathJoined)

for(let i=1; i<inputArr.length; i++){

    let topicPathJoined = path.join(pathJoined, inputArr[i])
    // console.log("pathJoined: ", topicPathJoined)
    fs.mkdirSync(topicPathJoined);
    console.log("Directory Created", fName+"->"+inputArr[i])

    for(let j=1; j<=5; j++){

        let modulePathJoined = path.join(topicPathJoined, "Module"+j)
        // console.log("pathJoinedInside: ", modulePathJoined)
        fs.mkdirSync(modulePathJoined);
        console.log("Directory Created", fName+"->"+inputArr[i]+"-> Module"+j)

        let filePath = path.join(modulePathJoined, "content.md")
        fs.writeFileSync(filePath, "Hello Everyone")
    }
}

/* I tested this code by passing n number of sections instead of three, and it works fine */