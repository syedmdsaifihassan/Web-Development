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
    if (fs.existsSync(src)) {
        let chechOrgFile = path.join(src, "Organized Files");
        if(fs.existsSync(chechOrgFile)){
            console.log("Files already Organized")
        }
        else{
            let currentPath = path.join(src);
            let organizedP = path.join(src, "Organized Files");
            let mediaP = path.join(organizedP, "Media");
            let archivesP = path.join(organizedP, "Archives");
            let documentsP = path.join(organizedP, "Documents");
            let appP = path.join(organizedP, "Apps");
            let otherP = path.join(organizedP, "Others");

            fs.mkdirSync(organizedP);
            fs.mkdirSync(mediaP);
            fs.mkdirSync(archivesP);
            fs.mkdirSync(documentsP);
            fs.mkdirSync(appP);
            fs.mkdirSync(otherP);

            let files = fs.readdirSync(currentPath);
            // console.log(files);

            for(let i=0; i<files.length; i++) {

                let filePath = path.join(currentPath, files[i]);
                if(fs.lstatSync(filePath).isFile()==true) {
                    // let ext = path.extname(files[i]);
                    let ext = files[i].split(".")[1];
                    // media
                    if(types.media.includes(ext)) {
                        // let srcPath = path.join(currentPath, files[i])
                        let destPath = path.join(mediaP, files[i]);
                        fs.copyFileSync(filePath, destPath);
                        console.log("---File copied---");
                    }
                    // archives
                    else if(types.archives.includes(ext)) {
                        // let srcPath = path.join(currentPath, files[i])
                        let destPath = path.join(archivesP, files[i]);
                        fs.copyFileSync(filePath, destPath);
                        console.log("---file copied---");
                    }
                    // documents
                    else if(types.documents.includes(ext)) {
                        // let srcPath = path.join(currentPath, files[i])
                        let destPath = path.join(documentsP, files[i]);
                        fs.copyFileSync(filePath, destPath);
                        console.log("---file copied---");
                    }
                    // app
                    else if(types.app.includes(ext)) {
                        // let srcPath = path.join(currentPath, files[i])
                        let destPath = path.join(appP, files[i]);
                        fs.copyFileSync(filePath, destPath);
                        console.log("---file copied---");
                    }
                    // other files
                    else {
                        // let srcPath = path.join(currentPath, files[i])
                        let destPath = path.join(otherP, files[i]);
                        fs.copyFileSync(filePath, destPath);
                        console.log("---file copied---");
                    }

                    // delete the all files(by passing its path) after placing in their organized folder
                    // fs.unlinkSync(filePath);
                    // console.log("---File organized and deleted from messed folder---");
                }
            }
            console.log("---Files organized---");
        }
    }
    else{
        console.log("Path is Invalid");
    }
}

module.exports = {
    organizeFxn: organizeFn,
}