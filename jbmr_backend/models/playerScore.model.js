const mongoose = require("mongoose");

const playerScoreSchema = new mongoose.Schema(
  {
    matchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
      required: true,
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    playerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    runScore: {
      type: Number,
      default: 0,
    },
    fours: {
      type: Number,
      default: 0,
    },
    sixes: {
      type: Number,
      default: 0,
    },
    WicketGoneBy: {
      type: String,
    },
    wicketTakenBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    wicketTakenByOtherPlayer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    runGiven: {
      type: Number,
      default: 0,
    },
    wicketTaken: {
      bowlerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      batsmanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      typeOfWicket: String,
      otherBowlerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    foursGiven:{
      type:Number,
      default:0
    },
    sixesGiven:{
      type:Number,
      default:0
    },
    whiteBall:{
      type:Number,
      default:0
    },
    noBalls:{
      type:Number,
      default:0
    },

  },
  { timestamps: true }
);

const playerScore = mongoose.model("playerScore", playerScoreSchema);

module.exports = playerScore;
