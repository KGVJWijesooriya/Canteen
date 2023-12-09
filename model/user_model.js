const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        require :true,
        unique:true
    },
    password:{
        type:String,
        require :true
    }
});

const UserModel = db.model('user',userSchema);

module.exports = UserModel;