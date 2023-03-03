const http=require("http")
const url=require('url')
const fs=require("fs")
const server=http.createServer((req,res)=>{ 
    fs.readFile("index.js","utf-8",(err,data)=>
{
    console.log(data);
})
}) 
server.listen(8000,"127.0.0.1",()=>{ 
    console.log("listening to port 8000") 
})
