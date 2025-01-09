const express = require("express");
const { validateBody } = require("../../utils/validate");
const multer = require("multer");
const upload = multer();
const tournamentController = require("./tournament.controller");
const { tournamentSchema } = require("./tournament.dto");
const authController = require("../auth/auth.controller");

const router = express.Router();

router.post(
  "/createTournament",
  authController.protect,
  upload.fields([
    { name: "tournamentBanner", maxCount: 1 },
    { name: "tournamentLogo", maxCount: 1 },
  ]),
  tournamentController.createTournament
);
router.get(
  "/getIndTournament/:tournamentId",
  authController.protect,
  tournamentController.getIndTournament
);
router.post(
  "/getAllTournaments",
  authController.protect,
  tournamentController.getAllTournamentsByCity
);
router.post("/addTeam", authController.protect, tournamentController.addTeam);

module.exports = router;
