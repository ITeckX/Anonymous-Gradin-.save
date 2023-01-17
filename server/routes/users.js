const express= require('express');
const router=require('express-promise-router')();
const passport=require('passport');
const passportConfig=require('../passport.js');
const UsersController=require('../controllers/users');
const {validateBody, schemas, validateProject} = require('../helpers/routeHelpers.js');
const passportSignIn=passport.authenticate('local',{session:false});
const passportJWT=passport.authenticate('jwt',{session:false});
router.route('/signup')
.post(validateBody(schemas.authSchema),UsersController.signUp);

router.route('/signIn')
.post(validateBody(schemas.authSchema),passportSignIn,UsersController.signIn);

router.route('/secret')
.get(passportJWT,UsersController.secret);

router.route('/dashboard')
.post(validateProject(schemas.projectSchema),UsersController.dashboard);
module.exports=router;
