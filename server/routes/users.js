const express = require('express');
const userRoute = express.Router();

userRoute.get('/',(req,res) =>{
   res.send('home user');
});

module.exports = userRoute;