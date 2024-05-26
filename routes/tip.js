const express = require("express");
const router = express.Router();
const tipsController = require("../controllers/tips");


router.post("/calculate",tipsController.addTip);
router.get("/tips",tipsController.getTIps);


module.exports = router;