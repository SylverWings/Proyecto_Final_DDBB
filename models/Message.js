const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    text: {
        type: String,
        require: true
    },    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
        required: true
    }
},  {
    timestamps: true
    }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;