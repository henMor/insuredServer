const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clientModel = new Schema({
    username: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model('client', clientModel);