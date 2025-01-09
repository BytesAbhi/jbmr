const { ref } = require("joi");
const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamLogo: {
        type: String,
        required:false
    },
    teamName: {
        type: String,
        unique:true,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    teamCity: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    teamContactNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },
    teamCaptainName: {
        type: String,
        required: false
    },
    addMyself: {
        type: Boolean,
        default: false
    },
    teamPlayer: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    partofTournament:{
        type:Boolean,
        default:false
    },
    matches:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Match"
    }],
    tournament:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tournament"
    }],
    stats:{
        MatchesCnt:{
            type:Number,
            default:0
        },
        upcoming:{
            type:Number,
            default:0
        },
        won:{
            type:Number,
            default:0
        },
        lost:{
            type:Number,
            default:0
        },
        winPer:{
            type:Number,
            default:0
        },
        tossWon:{
            type:Number,
            default:0
        },
        batFirst:{
            type:Number,
            default:0
        },
        bowlFirst:{
            type:Number,
            default:0
        }
    },
    awards:{
        type:String
    },
    photos:{
        type:String
    },
    ownerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;