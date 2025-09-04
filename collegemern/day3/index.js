const express = require("express")
const app = express()

app.get("/",(req,res)=>{
res.send("this is a home page")
})
app.listen(4000,()=>{
    console.log("server created")
})
  
