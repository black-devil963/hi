const http=require("http")
const url=require('url')
const fs=require("fs")
const server=http.createServer((req,res)=>{ 
 const b=fs.readFileSync('inddex.js');
 res.end(b);   
}) 
server.listen(8000,"127.0.0.1",()=>{ 
    console.log("listening to port 8000") 
})
