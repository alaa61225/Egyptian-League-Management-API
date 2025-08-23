const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");

router.get("/", matchController.getMatches);
router.post("/", matchController.createMatch);
router.put("/:id", matchController.updateMatch);
router.delete("/:id", matchController.deleteMatch);

module.exports = router;
