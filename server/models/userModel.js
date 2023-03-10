const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: 'string',
        require: true,
        unique: true
    },
    password: {
        type: 'string',
        require: true,
    }
}, { collection: "users" });

module.exports = mongoose.model("User", userSchema);