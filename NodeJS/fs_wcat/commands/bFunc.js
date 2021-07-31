let fs = require('fs');

function bFn(filesArr) {

    // give numbering to non-empty lines 
    let content = "";
    for(let i = 0; i < filesArr.length; i++){
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
    content = content.replace(/(\r\n|\n|\r)/gm, "<br>");
    content = content.split("<br>");
    // console.log(content);

    for(let i=0, c=1; i<content.length; i++, c++) {
        content[i] = c+". " + content[i];
    }
    // console.log(content);
    let contentNumberingEmptyLines = content.join("\n\n");
    console.log("\n-b, numbering empty lines too !\n")
    console.log(contentNumberingEmptyLines);
}

module.exports = {
    bFxn: bFn,
}