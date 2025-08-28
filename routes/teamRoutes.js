const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");
const upload = require("../middleware/upload");

router.post("/:id/logo", upload.single("logo"), teamController.uploadLogo);
router.get("/", teamController.getTeams);
router.post("/", teamController.createTeam);
router.put("/:id", teamController.updateTeam);
router.delete("/:id", teamController.deleteTeam);

module.exports = router;
