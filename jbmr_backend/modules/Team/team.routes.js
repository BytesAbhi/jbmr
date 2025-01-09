const express = require('express');
const { validateBody } = require('../../utils/validate');
const multer = require('multer');
const upload = multer()
const teamController = require('./team.controller')
const authController = require('../auth/auth.controller');
const { createTeamSchema,playerIndentity } = require('./team.dto');

const router = express.Router();

router.post("/createTeam",upload.single('file'),validateBody(createTeamSchema),authController.protect,teamController.createTeam);
router.post("/addPlayer",authController.protect,teamController.addTeamMember);
router.get("/getPlayers/:teamId",authController.protect,teamController.getPlayers);
router.post("/getAllTeamCity",authController.protect,teamController.getAllTeamsCity)
router.get("/getAllTeam",authController.protect,teamController.getAllTeams)
router.get('/getIndTeam/:teamId',authController.protect,teamController.getIndTeam)

module.exports = router;
