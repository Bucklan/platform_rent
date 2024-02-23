const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
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

// export default mongoose.model('User', UserSchema);
