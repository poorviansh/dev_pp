function getfirstname(fullname){
    fullname = fullname.split(" ");
    return fullname[0];
}

function getlastname(fullname){
    fullname = fullname.split(" ");
    return fullname[1];
}

function hof(fullname, fun){
    let name = fun(fullname);
    console.log(name);
}

hof("Poorvi Chaudhary", getfirstname);
hof("Ansh Chaudhary", getlastname);