const router = require("express").Router();
const messageController = require("../controllers/messageController");
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get("/messages/:id", verifyToken, messageController.getById);
router.post("/messages", verifyToken, messageController.create);
router.put("/messages/:id", verifyToken, messageController.update);
router.delete("/messages/:id", verifyToken, messageController.delete);

module.exports = router;