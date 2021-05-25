const http = require('http')
const fs = require('fs')
const url=require('url')
const { StringDecoder } = require('string_decoder')

const server = http.createServer((req, res) => {
    var q=url.parse(req.url,true)
    var fname= "." + q.pathname;
    
    if(fname == "./")
    {
        fname = "./index.html" 
    }

    console.log("[+] Requested "+fname)

    fs.readFile(fname,function(error,data)
    {
        if(error)
        {
            res.writeHead(404,{'content-type':'text/html'})
            res.end("404 Error: Couldn't find page")
        }
        else if (fname.endsWith('css'))
        {
            res.writeHead(200,{'content-type':'text/css'})
            res.write(data)
            res.end()
        }
        else if (fname.endsWith(".mp3"))
        {
            res.writeHead(200,{'content-type':'audio/mp3'})
            res.write(data)
            res.end()
        }
        else
        {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        }            
    })
})

console.log("[+] Server Starting")
console.log(process.env.PORT || 3001)

server.listen(process.env.PORT || 3001)