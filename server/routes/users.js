const express = require('express');
const userRoute = express.Router();
const  users = require('../models/user.model');

userRoute.post('/login',(req,res) =>{
   try {
      res.status(200);
   } catch (error) {
      res.status(400).json({message: error});
   }
});

userRoute.post('/sign-up', async (req, res)=>{
   const signupPayload = new users(req.body);
   try {
      const saveUsers = await signupPayload.save();
      res.status(201).json(saveUsers);
   } catch (error) {
      res.status(400).json({message: error});
   }
})

module.exports = userRoute;