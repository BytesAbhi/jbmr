const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    isIndividual: {
      type: Boolean,
      default: false,
    },
    tournament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tournament",
      default: null,
    },
    teamA: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    teamAsquad: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    teamB: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
    teamBsquad: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    numberOfOver: {
      type: Number,
      default: 0,
    },
    city: {
      type: String,
    },
    ground: {
      type: String,
    },
    date: {
      type: Date,
    },
    ballType: {
      type: String,
      default: "Tennis",
    },
    pitchType: {
      type: String,
      default: "Cement",
    },
    matchType: {
      type: String,
      default: "Limited Over",
    },
    currentState: {
      currentBowler: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default:null
      },
      currentWicketKeeper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default:null
      },
      nonStriker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default:null
      },
      striker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default:null
      },
      currentBattingTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        default: null,
      },
      currentBowlingTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        default: null,
      },
    },
    teamScores: [
      {
        teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team",default:null },
        runs: { type: Number, default: 0 },
        wickets: { type: Number, default: 0 },
        overs: { type: Number, default: 0 },
        balls: { type: Number, default: 0 },
        totalSixes: { type: Number, default: 0 },
        totalFours: { type: Number, default: 0 },
        totalWides: { type: Number, default: 0 },
        totalNoBalls: { type: Number, default: 0 },
      },
    ],
    playerScores: [
      {
        playerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          default:null
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
        WicketType: {
          type: String,
          default:null
        },
        wicketTakenBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          default:null
        },
        wicketTakenByOtherPlayer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          default:null
        },
        runGiven: {
          type: Number,
          default: 0,
        },
        wicketTaken: {
          bowlerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:null
          },
          batsmanId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:null
          },
          typeOfWicket: {
            type:String,
            default:null
          },
          fielderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:null
          },

        },
        foursGiven: {
          type: Number,
          default: 0,
        },
        sixesGiven: {
          type: Number,
          default: 0,
        },
        wideBall: {
          type: Number,
          default: 0,
        },
        noBalls: {
          type: Number,
          default: 0,
        },
        balls:{
          type:Number,
          default:0
        },
        wickets:{
          type:Number,
          default:0
        }
      },
    ],
    ballByBall: [
      {
          bowlerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:null
          },
        batsMen: {
          strikerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:null
          },
          nonStrikerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:null
          },
        },
        run: {
          type: Number,
          default: 0,
        },
        six: {
          type: Boolean,
          default: false,
        },
        four: {
          type: Boolean,
          default: false,
        },
        wideBall: {
          type: Boolean,
          default: false,
        },
        noBall: {
          type: Boolean,
          default: false,
        },
        wicket: {
          type: Boolean,
          default: false,
        },
        wicketType: {
          type: String,
        },
        wicketOtherPlayer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          default:null
        },
      },
    ],
    tossWon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      default:null
    },
    teamACaptain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default:null
    },
    teamAWC: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default:null
    },
    teamBCaptain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default:null
    },
    teamBWC: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default:null
    },
    status:{
      type:String,
      default:"Not Started"
    }
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
