const express = require('express');

const router = express.Router();
const user = mongoose.model('user');

router.post('/register',(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    const user = new user({email,password});
    user.save((err,user)=>{
        res.send(user);
    })    
})

router.get('/help',(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    const user = new user({email,password});
    user.save((err,user)=>{
        res.send(user);
    })    
})

module.exports = router;