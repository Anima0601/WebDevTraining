const server = require("http")
const user = [
    {"id":1, "name":"Alice"},
    {"id":2, "name":"Bob"},
    {"id":3, "name":"Charlie"}
];

server.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("this is home page");
    }
    else
       if(req.url=="/users"){
           res.write(JSON.stringify(user));
        }
        else{
           res.write("url page not found");
         }
    res.end("")
}).listen(5000,()=>{
    console.log("server is started")
})