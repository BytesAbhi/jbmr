const { string, boolean } = require("joi");
const mongoose = require("mongoose");

const ROLES = Object.freeze({
  ADMIN: "Admin",
  EMPLOYEE: "Employee",
  SUPERADMIN: "SuperAdmin",
  CLIENT: "Client",
  CAPTAIN: "Captain",
});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String, // Changed to String to match the validation schema
      required: true,
      unique: true, // Assuming phone numbers should be unique
      trim: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      required: true, // Uncommented to make it mandatory
      trim: true,
    },

    dob: {
      type: Date,
      required: true, // Uncommented to make DOB mandatory
    },
    city: {
      type: String,
      required: true, // Uncommented to make City mandatory
      trim: true,
    },
    region: {
      type: String,
      required: true, // Uncommented to make Region mandatory
      trim: true,
    },

    profileImage: {
      type: {
        url: { type: String }, // URL of the image
        public_id: { type: String }, // Public ID of the image
      },
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      default: "USER",
    },
    playerRole: {
      type: String,
    },
    battingStyle: {
      type: String,
    },
    bowlingStyle: {
      type: String,
    },
    matches: [
      {
        matchID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Match",
        },
        owner: {
          type: Boolean,
          default: false,
        },
      },
    ],
    teams: [
      {
        teamId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Team",
        },
        owner: {
          type: Boolean,
          default: false,
        },
      },
    ],
    Tournament: [
      {
        tournamentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tournament",
        },
        owner: {
          type: Boolean,
          default: false,
        },
      },
    ],

    profileIsComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
