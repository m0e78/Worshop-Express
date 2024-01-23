const express=require('express')
const app=express()
const port=5000

const home=require('./routes/home')
const about=require('./routes/about')

app.use('/home',home)
app.use('/about',about)


app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`)
})