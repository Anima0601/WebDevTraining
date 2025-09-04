const server = require("http")

server.createServer((req,res)=>{
    res.write("message from server");
    res.end("");
}).listen(4000,()=>{
    console.log("server is started")
})