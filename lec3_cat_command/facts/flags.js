let fs = require("fs");

let filedata = fs.readFileSync("./f1.txt");

filedata = filedata + "";

let data  = filedata.split("\r\n");

//-s

// let emptyspace = [];
// let isempty = false;

// function removeSpace(data){
//     for(let i = 0; i<data.length; i++){
//         if(data[i] == "" && !isempty){
//             emptyspace.push(data[i]);
//             isempty = true;
//         }
//         else if(data[i]!="") {
//             emptyspace.push(data[i]);
//         }
//     }
    
// }
// removeSpace(data);
//     let showtime = emptyspace.join("\n");
// console.log(showtime);


//-b
// let count=1;
// function flagb(data){
//     for(let i = 0; i<data.length; i++){
//         if(data[i] != ""){
//             data[i] = `${count}. ${data[i]}`;
//             count++;
//         }
//     }
// }

// flagb(data);
// let show = data.join("\n");
// console.log(show);


//-n
function flagn(data){
    for(let i = 1; i<data.length; i++){
        data[i-1] = `${i}. ${data[i-1]}`;
    }
}

flagn(data);
let show1 = data.join("\n");
console.log(show1);