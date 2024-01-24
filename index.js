const express = require("express")
const app = express()
const port = 5000
const bodyparser = require("body-parser")
const user = {
  email: "email@gmail.com",
  pass: "12345",
}
const home = require("./routes/home")
const about = require("./routes/about")

app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended:false}))
const auth = (req, res, next) => {
  const { email, pass } = req.body
  console.log(req.body)
  if (email == user.email && pass == user.pass) {
    next()
  } else {
    res.status(401).send("incorrect identification")
  }
}
app.use("/home", auth)
app.use("/home", home)
app.use("/about", about)
app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`)
})
