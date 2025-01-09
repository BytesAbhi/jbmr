const mongoose = require('mongoose');


// Define the tournament schema
const tournamentSchema = new mongoose.Schema({
    tournamentBanner: {
        type: String, // Assuming you will store the URL of the uploaded banner image
        required: true,
    },
    tournamentLogo: {
        type: String, // Assuming you will store the URL of the uploaded logo image
        required: true,
    },
    tournamentName: {
        type: String,
        required: true,
    },
    tournamentCity: {
        type: String,
        required: true,
    },
    tournamentGround: {
        type: String,
        required: true,
    },
    //email
    tournamentOrganizer: {
        type: String,
        required: true,
    },
    tournamentOrganizerContactNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]+$/.test(v) && v.length === 10; // Validate that it's a number and exactly 10 digits
            },
            message: props => `${props.value} is not a valid contact number!`
        }
    },
    tournamentStartDate: {
        type: Date,
        required: true,
    },
    tournamentEndDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(v) {
                return v > this.tournamentStartDate; // Ensure end date is after start date
            },
            message: props => `End date must be after start date!`
        }
    },
    tournamentCategory: {
        type: String,
        required: true,
    },
    ballType: {
        type: String,
        required: true,
    },
    pitchType: {
        type: String,
        required: true,
    },
    matchType: {
        type: String,
        required: true,
    },
    matches:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Match"
    }],
    team:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }],
    ownerId:{
        type:String,
    }
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Create the Tournament model
const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports =  Tournament ;

