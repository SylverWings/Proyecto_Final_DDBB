const router = require("express").Router();
const messageController = require("../controllers/MessageController");
const isSuperAdmin = require('../middlewares/isSuperAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get("/messages", verifyToken,isSuperAdmin, messageController.getAll);
router.get("/messages/:id", verifyToken, messageController.getById);
router.post("/messages/:id", verifyToken, messageController.create);
router.put("/messages/:id", verifyToken, messageController.modificate);
router.delete("/messages/:id", verifyToken, messageController.delete);

module.exports = router;