const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        requiered: true
    },
    email: {
        type: String,
        requiered: true,
    },
    password: {
        type: String,
        requiered: true,
        minlength: 8
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;