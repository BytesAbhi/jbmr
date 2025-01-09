const express = require('express');
const { validateBody } = require('../../utils/validate');
const matchController = require('./match.controller')
const authController = require('../auth/auth.controller');

const router = express.Router();

router.post("/createMatch",authController.protect,matchController.createMatch);
router.get("/getAllMatches",authController.protect,matchController.getAllMatches);
router.get("/getIndMatch/:matchId",authController.protect,matchController.getIndMatch);
router.post("/getAll",authController.protect,matchController.getAllMatchCity);
router.post("/setCaptainAndWC/:matchId",authController.protect,matchController.setCaptainAndWicketKeeper);
router.post("/tossResult",authController.protect,matchController.tossWon);
router.post("/setIntailPlayers/:matchId",authController.protect,matchController.setIntailPlayers);


module.exports = router;
