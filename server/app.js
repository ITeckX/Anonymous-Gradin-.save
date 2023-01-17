const express = require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/anonymous-grading');
const app=express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users',require('./routes/users.js'));
//Server
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server up on ${port}`);
