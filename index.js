const http=require("http") 
const fs= require('fs')
const url=require('url') 
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
  };
//by defualt http ha url features but some features not supported so we use this
const server=http.createServer((req,res)=>{ 
        
const shell = require('shelljs')
const path = 'E:/_class 3rd sem/img'
shell.cd(path)
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
