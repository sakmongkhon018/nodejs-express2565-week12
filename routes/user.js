const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Router Home')
    next()
})
router.get('/user',(req,res)=>{
    res.send('User Router Working')
    next()
})

router.get('/admin',(req,res)=>{
    res.send('Admin Router Working')
    next()
})

module.exports = router