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
    platform: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        default: true
    },
    imgLink: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: false
    },
    personalScore: {
        type: Number,
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