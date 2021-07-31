let fs = require('fs');

function nFn(filesArr) {
    // give numbering to all the lines 
    let content = "";
    for(let i = 0; i < filesArr.length; i++){
        content += fs.readFileSync(filesArr[i]) + "\r\n";
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
    console.log("\n-n, numbering !\n")
    console.log(contentNumbering);
}

module.exports = {
    nFxn: nFn,
}