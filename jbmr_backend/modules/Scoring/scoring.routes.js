const express = require('express');
const authController = require('../../modules/auth/auth.controller');
const scoringController = require('./scoring.controller')


const router = express.Router();

router.post('/addScore/:matchId',authController.protect,scoringController.addRun)
router.post('/addBoundary/:matchId',authController.protect,scoringController.addBoundary)
router.post('/addWicket/:matchId',authController.protect,scoringController.addWicket)
router.post('/otherBalls/:matchId',authController.protect,scoringController.otherBalls)
router.post('/overUpdate/:matchId',authController.protect,scoringController.overUpdate)
router.get('/setIntailData/:matchId',authController.protect,scoringController.setIntialValues)


module.exports = router;