const http=require("http")
const port =process.env.PORT||8000;
const server=http.createServer((req,res)=>{
    res.end("response getting");
})
//npm install -g nodemon  => install live server for node 
server.listen(port,"127.0.0.1",()=>{ //call back fn is required as server is asynchronus function
    console.log(`Server is running on port ${port}`);
    console.log(process.env)
})
