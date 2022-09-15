const Game = require("../models/Game");
const Message = require("../models/Message");
const messageController = {};

messageController.getAll = async (req, res) => {

    try {
        const userId = req.user_id;
        const messages = await Message.find({userId});

        if(messages.length === 0){
            return res.status(200).json({
                success: true,
                message: "You don't have already messages"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Get all messages retrivered successfully',
            data: messages
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving messages: ',
            error: error.message
        })
    }
};

messageController.getById = async (req, res) => {

    try {
        const messageId = req.params.id;
        const userId = req.user_id;
        
        const messages = await Message.findOne({_id: messageId, userId: userId})

        return res.status(200).json({
            success: true,
            message: 'Get all messages retrivered successfully',
            data: messages
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving messages: ',
            error: error.message
        })
    }
};

messageController.create = async(req, res) =>{
    try {
        const text = req.body;
        const gameId = req.params._id;
        const userId = req.user_id;

        if(!text){
            return res.status(400).json({
                success: false,
                message: "You may send a valid text"
            })
        };
        
        const newMessage = {
            text,
            userId: userId,
            gameId: gameId
        };

        await Message.create(newMessage);     

        return res.status(200).json({
            success: true,
            message: "New message created",
            data: newMessage
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Message creation failed"
        })
    }
};

messageController.modificate = async(req, res) => {
    try{
        const filter = {
            _id: req.params.id,
            userId: req.user_id
        };
        
        const update = {
            text: req.body.text,                         
        };
                    
        const messageModificated = await Message.findOneAndUpdate(filter, update, {new: true});   
        if(!messageModificated){
            return res.status(200).json({
                success: true,
                message: "Message doesn't exists"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Message modificate success",
            data: messageModificated
        });    
    }catch (error){        
        return res.status(500).json({
            success: false,
            message: "Error detected",
            error: error?.message || error
        })
    }
};

messageController.delete = async(req, res)=>{
    try{
        const filter = {
            _id: req.params._id,
            userId: req.user_id
        };
        
        const messageDeleted = await Message.findOneAndDelete(filter);

        return res.status(200).json({
            success: true,
            message: "Delete message successfully",
            data: messageDeleted
            })
    }catch (error){
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }

};

module.exports = messageController;