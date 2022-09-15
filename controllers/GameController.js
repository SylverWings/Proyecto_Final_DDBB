const Game = require("../models/Game");
const gameController = {};

gameController.getAll = async (req, res) => {

    try {
        const userId = req.user_id;
        const games = await Game.find({
            userId
        });

        if (games.length === 0) {
            return res.status(200).json({
                success: true,
                message: "You don't have already games"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Get all games retrivered successfully',
            data: games
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving games: ',
            error: error.message
        })
    }
};

gameController.getByName = async (req, res) => {

    try {
        const gameName = req.params.name;
        const games = await Game.findOne({
            title: gameName
        });

        if (games.length === 0) {
            return res.status(200).json({
                success: true,
                message: "The game you're looking for doesn't exist"
            })
        }

        return res.status(200).json({
            success: true,
            message: 'The game has been found',
            data: games
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving the game',
            error: error.message
        })
    }
};

gameController.getById = async (req, res) => {

    try {
        const gameId = req.params.id;
        const userId = req.user_id;

        const games = await Game.findOne({
            _id: gameId,
            userId: userId
        })

        return res.status(200).json({
            success: true,
            message: 'Get all games retrivered successfully',
            data: games
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retriving games: ',
            error: error.message
        })
    }
};

gameController.create = async (req, res) => {
    try {
        const {
            name,
            year,
            platform,
            genre,
            imgLink,
            description,
            personalScore
        } = req.body;
        
        const userId = req.user_id;

        if (!name || !year || !platform || !genre || !description || !personalScore) {
            return res.status(400).json({
                success: false,
                message: "All camps are required"
            })
        };

        const newGame = {
            name,
            year,
            platform,
            genre,
            imgLink,
            description,
            personalScore,
            userId: req.user_id
        };

        await Game.create(newGame);

        return res.status(200).json({
            success: true,
            message: "New game created",
            data: newGame
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Game creation failed"
        })
    }
}

gameController.update = async (req, res) => {
    try {
        const filter = {
            _id: req.params.id,
            userId: req.user_id
        };

        const update = {
            name: req.body.name,
            year: req.body.year,
            platform: req.body.platform,
            genre: req.body.genre,
            description: req.body.description,
            personalScore: req.body.personalScore
        };

        const gameUpdated = await Game.findOneAndUpdate(filter, update, {
            new: true
        });
        if (!gameUpdated) {
            return res.status(200).json({
                success: true,
                message: "Game doesn't exists"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Game update success",
            data: gameUpdated
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error detected",
            error: error?.message || error
        })
    }
};

gameController.delete = async (req, res) => {
    try {
        const filter = {
            _id: req.params._id,
            userId: req.user_id
        };

        const gameDeleted = await Game.findOneAndDelete(filter);

        return res.status(200).json({
            success: true,
            message: "Delete game successfully",
            data: gameDeleted
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error detected",
            data: error?.message || error
        })
    }

}

module.exports = gameController;