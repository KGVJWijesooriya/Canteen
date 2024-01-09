const mongoose = require('mongoose');
require('dotenv').config();
const connection = mongoose.createConnection(process.env.MDBCONNECTION).on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;