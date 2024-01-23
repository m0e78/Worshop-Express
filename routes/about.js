const express=require('express')
const aboutroute=express.Router()




aboutroute.get('/',(req,res)=>{
    res.send('this is the about page')
})

module.exports=aboutroute