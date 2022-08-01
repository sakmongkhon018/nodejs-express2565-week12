const express = require('express')
const http = require('http')
const app = express()

const server = http.createServer(app)
const PORT = process.env.PORT || 5000
const hostname = 'localhost'

//Get:http://locahost:5000
app.get('/',(req,res)=>{
    res.send("Welcome to thailand")
})

//Get:http://locahost:5000/user
app.get('/user',(req,res)=>{
    console.log("User Page")
    res.send("User Page")
})

//Get:http://locahost:5000/contact
app.get('/contact',(req,res)=>{
    res.send("Contact Page")
})
server.listen(5000,()=>{
    console.log(`Server running at http://${hostname}:${PORT}`)
})
