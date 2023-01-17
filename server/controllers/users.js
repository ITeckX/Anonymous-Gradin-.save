const User=require('../models/users.js');
const Project=require('../models/users.js');
const JWT = require('jsonwebtoken');
const {JWT_SECRET}=require('../config/index.js')

signToken= user=>{
    return JWT.sign({
        iss:'.save',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+1)
    },JWT_SECRET);
    
}
module.exports={
    signUp: async(req,res,next)=>{
        const email=req.value.body.email;
        const password=req.value.body.password;
        const foundUser =await User.findOne({email: email});
        if(foundUser){
            return res.status(403).json({error:'Email already registered.'});
        }
        const newUser=new User({
            email:email,
            password:password
        });
        await newUser.save();
        const token=signToken(newUser);
        res.status(200).json({token:token});
    },
    signIn: async(req,res,next)=>{
       
        const token=signToken(req.user);
        res.status(200).json({token:token});
       console.log('Login done');
    },
    secret: async(req,res,next)=>{
        console.log('secret');
        res.json({secret:"resource"});
    },
    dashboard: async(req,res,next)=>{
        console.log('ceva');
       
        const name=req.value.body.name;
        const author=req.value.body.author;
        const link=req.value.body.link;
        const grade=req.value.body.grade;
        const newProject=new Project({
            name:name,
            author: author,
            link:link,
            grade:grade
        });
        await newProject.save();
        
    }
    
}