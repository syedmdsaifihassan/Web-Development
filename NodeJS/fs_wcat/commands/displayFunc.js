let fs = require('fs');

function displayFn(filesArr) {

    let content = "";

    for(let i = 0; i < filesArr.length; i++){
        content += fs.readFileSync(filesArr[i]) + "\r\n";
    }
    console.log("\nNo Command given --> Display the File Contents\n")
    console.log(content);

}
module.exports = {
    displayFxn: displayFn,
}