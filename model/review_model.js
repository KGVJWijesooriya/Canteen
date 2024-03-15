const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('../model/user_model.js');

const { Schema } = mongoose;

const reviewSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName,
        // required: true,
    },

    title: {
        type: String,
        required: true,
    },
    disc: {
        type: String,
        required: true
    }
});


const reviewModel = db.model('review', reviewSchema);

module.exports = reviewModel;