let fs = require('fs');

function sFn(filesArr) {

    // convert big line breaks into a singular line break
    let content = "";

    // if(cmd == '-s'){
        for(let i = 0; i < filesArr.length; i++){
            content += fs.readFileSync(filesArr[i]) + "\r\n";
        }
    // }
    content = content.replace(/(\r\n|\n|\r)/gm, "<br>");
    content = content.split("<br>");
    // console.log(content);
    //remove empty elements in content array
    content = content.filter(function (e) {return e != "";});
    // console.log(content);
    let contentSLB = content.join("\n\n");
    console.log("\n-s, Single Line Break !\n")
    console.log(contentSLB);
}

module.exports = {
    sFxn: sFn,
}