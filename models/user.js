const mongoose = require("mongoose");


const Schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    // lastname: {
    //     type: String,
    //     required: true
    // },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", Schema);