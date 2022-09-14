const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    favoriteGames: [{
        type: String,
        require: false,
        default: null
    }],
    desiredGames: [{
        type: String,
        require: false,
        default: null
    }],
    role: {
        type: String,
        enum: ['user', 'super_admin'],
        default: 'user'
    }    
},  {
    timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User