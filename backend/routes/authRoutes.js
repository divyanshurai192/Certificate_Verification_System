const router=require('express').Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');

router.post('/login',async(req,res)=>{
 const user=await User.findOne({email:req.body.email});
 if(!user) return res.status(400).send('Invalid');
 const ok=await bcrypt.compare(req.body.password,user.password);
 if(!ok) return res.status(400).send('Invalid');
 const token=jwt.sign({id:user._id},'secret');
 res.json({token});
});

module.exports=router;