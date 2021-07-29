let fs = require('fs');
let path = require('path');

function treeFn(src) {
    // console.log("tree command executed with path: " + src);

    ifDirectory(src);
}

function ifDirectory(src){
    let inputArr = fs.readdirSync(src);
    // console.log(inputArr);

    for(let i = 0; i < inputArr.length; i++) {
        let contentP = path.join(src, inputArr[i]);
        
        if(fs.lstatSync(contentP).isFile()== true) {
            console.log("\t"+"---> "+inputArr[i]);
        }else{
            console.log('\n'+"----"+inputArr[i]+"----");
            ifDirectory(contentP)

        }
    }
}

module.exports = {
    treeFxn: treeFn,
}