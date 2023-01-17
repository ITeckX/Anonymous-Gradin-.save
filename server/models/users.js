const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');
const { number } = require('joi');
const userSchema= new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password:{
        type: String,
        required: true
    }
});

const projectSchema= new Schema({
    name:{
        type:String,
        required: true,
        unique:false,
    },
    author:{
        type:String,
        required: true,
        unique:false,
    },
    link:{
        type:String,
        required: true,
        unique:true,
    },
    grade:{
        type:Number,
        required: true,
        unique:false,
    }
});

userSchema.pre('save',async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash=await bcrypt.hash(this.password,salt);
        this.password=passwordHash;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isValidPassword=async function(newPassword){
    try {
        return await bcrypt.compare(newPassword,this.password);
    } catch (error) {
        throw new Error(error);
    }
}

const User=mongoose.model('user', userSchema);
const Project = mongoose.model('project',projectSchema);

module.exports=User;
module.exports=Project;