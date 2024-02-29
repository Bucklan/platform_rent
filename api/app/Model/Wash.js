const mongoose = require("mongoose");

const WashSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false,
    },
    open: {
        type: Boolean,
        default: false,
    },
});

const Wash = mongoose.model('Wash', WashSchema);
module.exports = Wash;