require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json());


mongoose.connect(process.env.DEV_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const dataBin = mongoose.connection
dataBin.on('error', (error)=> console.log(error));
dataBin.once('open',()=> console.log('Connected to DB'));

const userRoute = require('./routes/users');
const dataRoute = require('./routes/data');

app.use('/users', userRoute);
app.use('/', dataRoute);

app.listen(process.env.MAIN_SERVER_PORT, (err)=>{
    if(err) console.log('Server did not start properly');
    console.log('Server running on Port:'+ process.env.MAIN_SERVER_PORT);
})