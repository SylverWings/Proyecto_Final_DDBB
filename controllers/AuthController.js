const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const authController = {};

authController.register = async (req, res) => {
    try {
        const {name, nickname, email, password} = req.body;

        if(!name || !nickname || !email || !password){
            return res.status(400).json({
                success: false,
                message: "Name, nickname, email and password are required"
            })
        }        

        console.log("estoy aqui")
        //<---------- codificar password ------->
        const salt = bcrypt.genSaltSync(10);
        const encryptPassword = await bcrypt.hash(password, salt);
        
        const newUser = {
            name,
            nickname, 
            email, 
            password: encryptPassword
        };

        await User.create(newUser);

        return res.status(200).json({
            success: true,
            massage: 'Create user successfully'
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Error creating users: ',
            error: error?.message || error
        })
    }
};

authController.login = async(req, res) =>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            })
        };

        const user = await User.findOne({email: email});

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Bad Credentials"
            })
        };
        
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if(!isValidPassword){
            return res.status(401).json({
                success: false,
                message: "Bad Credentials"
            })
        };

        const token = jwt.sign({user_id: user._id, user_role: user.role}, process.env.JWT_SECRET, {expiresIn: "5h"})

        return res.status(200).json({
            success: true,
            message: "User logged",
            token: token
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "User can't login"
        })
    }
};

authController.profile = async(req, res) =>{
    try {
        const userId = req.user_id;
        const user = await User.findOne({_id: userId});

        return res.status(200).json({
            success: true,
            message: "Profile finded",
            data: user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Profile can't login"
        })
    }
}

module.exports = authController;