let fs = require('fs');
let path = require('path');

let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "rar"],
    documents: ['docx', 'pdf', 'pages', 'txt'],
    app: ['exe', 'dmg', 'pkg']
}

function organizeFn(src) {
    console.log("organize command executed with path: src: " + src);

    //code
    let currentPath = src;
    let mediaP = path.join(currentPath, "media");
    let archivesP = path.join(currentPath, "archives");
    let documentsP = path.join(currentPath, "documents");
    let appP = path.join(currentPath, "app");
    let mixedP = path.join(currentPath, "mixed");

    fs.mkdirSync(mediaP);
    fs.mkdirSync(archivesP);
    fs.mkdirSync(documentsP);
    fs.mkdirSync(appP);
    fs.mkdirSync(mixedP);

    let files = fs.readdirSync(currentPath);
    // console.log(files);

    for(let i=0; i<files.length; i++) {

        let filePath = path.join(currentPath, files[i]);
        if(fs.lstatSync(filePath).isFile()==true) {
            // let ext = path.extname(files[i]);
            let ext = files[i].split(".")[1];
            // media
            if(ext=="mp4" || ext=="mkv") {
                // let srcPath = path.join(currentPath, files[i])
                let destPath = path.join(mediaP, files[i]);
                fs.copyFileSync(filePath, destPath);
                console.log("---file copied---");
            }
            // archives
            else if(ext=="zip" || ext=="rar") {
                // let srcPath = path.join(currentPath, files[i])
                let destPath = path.join(archivesP, files[i]);
                fs.copyFileSync(filePath, destPath);
                console.log("---file copied---");
            }
            // documents
            else if(ext=="docx" || ext=="pdf" || ext=="pages" || ext=="txt") {
                // let srcPath = path.join(currentPath, files[i])
                let destPath = path.join(documentsP, files[i]);
                fs.copyFileSync(filePath, destPath);
                console.log("---file copied---");
            }
            // app
            else if(ext=="exe" || ext=="dmg" || ext=="pkg") {
                // let srcPath = path.join(currentPath, files[i])
                let destPath = path.join(appP, files[i]);
                fs.copyFileSync(filePath, destPath);
                console.log("---file copied---");
            }
            // mixed files
            else {
                // let srcPath = path.join(currentPath, files[i])
                let destPath = path.join(mixedP, files[i]);
                fs.copyFileSync(filePath, destPath);
                console.log("---file copied---");
            }

        }
    }

}

module.exports = {
    organizeFxn: organizeFn,
}