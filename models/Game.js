const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    platform: [{
        type: String,
        require: true
    }],
    genre: [{
        type: String,
        require: true
    }],
    imgLink: {
        type: String,
        require: false,
        default: null
    },
    description: {
        type: String,
        require: false
    },
    personalScore: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},  {
    timestamps: true
    }
);

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;