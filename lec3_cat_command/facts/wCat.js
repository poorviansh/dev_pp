#!/usr/bin/env node
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
    filesdata += "\r\n";
}
console.log(filesdata)

let data  = filesdata.split("\r\n");

//-s

let emptyspace = [];
if(flags.includes("-s")){
    removeSpace(data);
}

if(flags.includes("-n") && flags.includes("-b")){
    if(flags.includes("-n")<flags.includes("-b")){
        //n pehle
        if(flags.includes("-s")){
            flagn(emptyspace);
        }
        else{
            flagn(data);
        }
    }
    else{
        //-b pehle
        if(flags.includes("-s")){
            flagb(emptyspace);
        }
        else{
            flagb(data);
        }
    }
}

else if(flags.includes("-n")){
    if(flags.includes("-s")){
        flagn(emptyspace);
    }
    else{
        flagn(data);
    }
}

else if(flags.includes("-b")){
    if(flags.includes("-s")){
        flagb(emptyspace);
    }
    else{
        flagb(data);
    }
}



function removeSpace(data){
    let isempty = false;
    for(let i = 0; i<data.length; i++){
        if(data[i] == "" && !isempty){
            emptyspace.push(data[i]);
            isempty = true;
        }
        else if(data[i]!="") {
            emptyspace.push(data[i]);
        }
    }
    // removeSpace(data);
    let showtime = emptyspace.join("\n");
console.log(showtime);
}



function flagn(data){
    for(let i = 1; i<data.length; i++){
        data[i-1] = `${i}. ${data[i-1]}`;
    }
    // flagn(data);
let show1 = data.join("\n");
console.log(show1);
}





function flagb(data){
    let count=1;
    for(let i = 0; i<data.length; i++){
        if(data[i] != ""){
            data[i] = `${count}. ${data[i]}`;
            count++;
        }
    }
    let show = data.join("\n");
console.log(show);
}

// flagb(data);
