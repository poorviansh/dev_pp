let fs = require("fs");

let content = process.argv.slice(2);
// console.log(content);

let flags = [];
let files = [];

for(let i = 0; i<content.length; i++){
    if(content[i].startsWith("-")){
        flags.push(content[i]);
    }
    else{
        files.push(content[i]);
    }
}

// console.log(flags);
// console.log(files);

//files
let filesdata = " ";
for(let i= 0; i<files.length; i++){
    filesdata += fs.readFileSync(files[i]) + "";
}
console.log(filesdata)