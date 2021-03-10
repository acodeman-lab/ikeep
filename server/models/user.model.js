const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
    },
    password:{
        type: String,
        require:true,
    },
    createdAt:{
        type: Date,
        require:true,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', userSchema);