const express = require('express');
const dataRoute = express.Router();

dataRoute.get('/',(req,res) =>{
   res.send('home data tab');
});

module.exports = dataRoute;