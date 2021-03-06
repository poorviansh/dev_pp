let fs = require("fs");
let path = require("path");
let extensions = require("./util");
let folderPath = "./downloads";
let extfolderpath;


function checkFolder(extension){
    for(let key in extensions){
        if(extensions[key].includes(extension)){
            extfolderpath = `${folderPath}/${key}`;
            break;
        }
    }
    // console.log(extfolderpath);

    return fs.existsSync(extfolderpath);
}

function move(filename){
    let sourceFile = `${folderPath}/${filename}`;
    let destFile = `${extfolderpath}/${filename}`;
    fs.copyFileSync(sourceFile, destFile);

    //delete
    fs.unlinkSync(sourceFile);
}

function createFolder(){
    fs.mkdirSync(extfolderpath);
}

function sortFolder(folderPath){
    let content = fs.readdirSync(folderPath);
   console.log(content)
    for(let i = 0; i<content.length; i++){
        let extension = path.extname(content[i]+"");
        console.log(extension);
        let isContent = checkFolder(extension);
        if(isContent){
            move(content[i]);
        }
        else{
            createFolder();
            move(content[i]);
        }
    }
}

sortFolder(folderPath);