const express = require('express')
const http = require('http')
const user = require('./routes/user')
const app = express()

const server = http.createServer(app)

app.use('/V1',user)

server.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }
})