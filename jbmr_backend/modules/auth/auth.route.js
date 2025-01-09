const express = require('express');
const authController = require('./auth.controller');
const { sendOtpOnNumberSchema, sendOtpOnEmailSchema, verifyOtpSchema , userSchema} = require('./auth.dto');
const path = require('path');
const { validateBody } = require('../../utils/validate');
const multer = require('multer');
const { validate } = require('../../models/otp.model');
const upload = multer()

const router = express.Router();


router.post("/signupByNumber",validateBody(sendOtpOnNumberSchema),authController.sendOtpOnNumber);
router.post("/createOrUpdateProfile",upload.single('file'),validateBody(userSchema),authController.createOrUpdateProfile);
router.post("/createUser",authController.protect,authController.createByEmailAndPhone)
router.get("/getMe",authController.protect,authController.getMe);
router.post("/signupByEmail",validateBody(sendOtpOnEmailSchema),authController.sendOtpOnEmail);
router.post("/sendOtp",authController.sendOtp);
router.post("/verifyOtp",authController.verifyOTP)
router.get('/logout',authController.protect,authController.logout);
router.post("/checkPlayerExist",authController.alreadyPlayer);
router.post("/checkPlayerExistByEmail",authController.alreadyPlayerWithEmail);

router.get("/getMyMatches",authController.protect,authController.getMyMatches)
router.get('/getAllMatches',authController.protect,authController.getAllMatches)
router.get('/getMyTournaments',authController.protect,authController.getMyTournaments)
router.get("/getMyTeams",authController.protect,authController.getMyTeams)
router.get("/getPlayerInd/:playerId",authController.protect,authController.getPlayerInd)

module.exports = router;