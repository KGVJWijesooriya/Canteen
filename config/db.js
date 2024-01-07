const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://vimukthi200007:Vimukthi27@canteen.kvebs8e.mongodb.net/?retryWrites=true&w=majority').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDB Connection error");
});

module.exports = connection;