const express=require('express')
const homeroute=express.Router()


homeroute.get('/',(req,res)=>{
    res.send('this is the home page')
})

module.exports=homeroute