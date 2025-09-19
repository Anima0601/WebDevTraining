const express = require("express")
const app=express()
const data=require("./data")

app.get("/users/:id",(req,res)=>{
       const id=parseInt(req.params.id)
       const user=data.users.find(u=>u.id===id)
       {
        if(user){
            res.json({
                    message:"data successfully printed",
                    data:user
                })
        }
        else{
            res.json(
                {
                    message:"user does not exist"
                }
            )
        }
       }
})