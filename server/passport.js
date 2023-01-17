const req = require('express/lib/request.js');
const passport= require('passport');
const JwtStrategy= require('passport-jwt').Strategy;
const LocalStrategy=require('passport-local').Strategy;
const {ExtractJwt}=require('passport-jwt');
const {JWT_SECRET}= require('./config/index.js');
const User=require('./models/users.js');
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET,
    //passReqToCallback:true
}, async (payload,done)=>{
try{
    const user=await User.findById(payload.sub);

    if(!user)return done(null,false);
   
    done(null,user);
}
catch(error){

    done(error,false);
   
}
}));

passport.use(new LocalStrategy({

    usernameField:'email'

},async (email,password,done)=>{
    try {
        
    const user=await User.findOne({email:email});

    if(!user)return done(null,false);

    const isMatch = await user.isValidPassword(password);
    if(!isMatch){
        return done(null,false);
    }
    done(null,user);
    } catch (error) {
        done(error,false);
    }

}));