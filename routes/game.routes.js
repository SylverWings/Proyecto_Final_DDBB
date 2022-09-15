const router = require("express").Router();
const gameController = require("../controllers/GameController");
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get("/games", verifyToken, gameController.getAll);
router.get("/games/name/:name", verifyToken, gameController.getByName);
router.get("/games/:id", verifyToken, gameController.getById);
router.post("/games", verifyToken,isSuperAdmin, gameController.create);
router.put("/games/:id", verifyToken, gameController.update);
router.delete("/games/:id", verifyToken, gameController.delete);

module.exports = router;