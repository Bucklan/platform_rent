const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 6,
        required: true
    },
    birth_date: {
        type: Date,
        required: false
    },
    have_car: {
        type: Boolean,
        default: false
    },
    interesting_sport: {
        type: Boolean,
        default: false
    },
    interesting_books: {
        type: Boolean,
        default: false
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;