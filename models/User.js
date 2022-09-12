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
        // minLength: 6,
        // maxLength: 10
    },
    favoriteGames: [{
        type: String,
        require: false
    }],
    desiredGames: [{
        type: String,
        require: false
    }],
    role: {
        type: String,
        enum: ['user', 'admin', 'super_admin'],
        default: 'user'
    }    
},  {
    timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User