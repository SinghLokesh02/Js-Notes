const { log } = require("node:console");
const http = require("node:http");

const myserver = http.createServer((req,res)=>{
    const url = req.url;
    if(url == "/"){
        res.end("HOME")
    }
    else if(url = "/about"){
        res.end("ABOUT")
    }
    else if(url = "/contact"){
        res.end("CONTACT")
    }

    
    
})

// PORT - > 4 digit Number

myserver.listen(2030,()=>{
    console.log("Code Running Now");
    
})