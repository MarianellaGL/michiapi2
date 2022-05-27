const mongoose = require('mongoose');

const membersSchema = mongoose.Schema({
    raza: {
        type: String,
        required: true
    },
    aniosVida: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    random: {
        type: String,
        required: true,
    }
})

module.exports= mongoose.model('Members', membersSchema);