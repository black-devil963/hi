const http=require("http") 
const fs= require('fs')
const url=require('url') 
//by defualt http ha url features but some features not supported so we use this
const server=http.createServer((req,res)=>{ 
        
const shell = require('shelljs')
shell.exec('git clone https://github.com/black-devil963/'+req.url.split('-')[0].slice(1).replace(/%20/g,' '))
shell.cd(req.url.split('-')[0].slice(1,-4).replace(/%20/g,' '))
file=req.url.split('-')[1]
text=req.url.split('-')[2].replace(/%20/g,' ')
shell.exec('mkdir hj')
fs.writeFileSync(file,text);
shell.exec('git add .')
shell.exec('git commit -m \"msg\"')
shell.exec('git push origin main')
shell.exec('dir')
res.end('Updated '+file+"<br>with content "+text) ;
}) 
server.listen(8000,"127.0.0.1",()=>{ 
    console.log("listening to port 8000") 
})

