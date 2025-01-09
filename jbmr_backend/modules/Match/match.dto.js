const Joi = require("joi");

// Validation schema for creating a match
const createMatchSchema = Joi.object({
  isIndividual: Joi.boolean().default(false),
  tournament: Joi.string().allow(null), // Optional
  teamA: Joi.string().required(), // Team A is required
  teamAsquad: Joi.array().items(Joi.string()).required(), // Must be an array of user IDs
  teamB: Joi.string().required(), // Team B is required
  teamBsquad: Joi.array().items(Joi.string()).required(), // Must be an array of user IDs
  numberOfOver: Joi.number().integer().min(0).default(0),
  city: Joi.string().required(), // City is required
  ground: Joi.string().required(), // Ground is required
  date: Joi.date().required(), // Date is required
  ballType: Joi.string()
    .valid("Tennis", "Leather", "Plastic")
    .default("Tennis"),
  pitchType: Joi.string()
    .valid("Cement", "Grass", "Artificial")
    .default("Cement"),
  matchType: Joi.string()
    .valid("Limited Over", "Test Match", "T20")
    .default("Limited Over"),
  currentState: Joi.object({
    currentBowler: Joi.string().allow(null), // Optional
    currentWicketKeeper: Joi.string().allow(null), // Optional
    nonStriker: Joi.string().allow(null), // Optional
    striker: Joi.string().allow(null), // Optional
    currentBattingTeam: Joi.string().allow(null), // Optional
    currentBowlingTeam: Joi.string().allow(null), // Optional
  }).default({}),
  teamScores: Joi.array().items(
    Joi.object({
      teamId: Joi.string().allow(null), // Optional
      runs: Joi.number().integer().default(0),
      wickets: Joi.number().integer().default(0),
      overs: Joi.number().integer().default(0),
      balls: Joi.number().integer().default(0),
      totalSixes: Joi.number().integer().default(0),
      totalFours: Joi.number().integer().default(0),
      totalWides: Joi.number().integer().default(0),
      totalNoBalls: Joi.number().integer().default(0),
    })
  ),
  playerScores: Joi.array().items(
    Joi.object({
      playerId: Joi.string().allow(null), // Optional
      runScore: Joi.number().integer().default(0),
      fours: Joi.number().integer().default(0),
      sixes: Joi.number().integer().default(0),
      WicketType: Joi.string().allow(null), // Optional
      wicketTakenBy: Joi.string().allow(null), // Optional
      wicketTakenByOtherPlayer: Joi.string().allow(null), // Optional
      runGiven: Joi.number().integer().default(0),
      wicketTaken: Joi.object({
        bowlerId: Joi.string().allow(null), // Optional
        batsmanId: Joi.string().allow(null), // Optional
        typeOfWicket: Joi.string().allow(null), // Optional
        fielderId: Joi.string().allow(null), // Optional
      }).default({}),
      foursGiven: Joi.number().integer().default(0),
      sixesGiven: Joi.number().integer().default(0),
      wideBall: Joi.number().integer().default(0),
      noBalls: Joi.number().integer().default(0),
      balls: Joi.number().integer().default(0),
      wickets: Joi.number().integer().default(0),
    })
  ),
  ballByBall: Joi.array().items(
    Joi.object({
      bowlerId: Joi.string().allow(null), // Optional
      batsMen: Joi.object({
        strikerId: Joi.string().allow(null), // Optional
        nonStrikerId: Joi.string().allow(null), // Optional
      }).default({}),
      run: Joi.number().integer().default(0),
      six: Joi.boolean().default(false),
      four: Joi.boolean().default(false),
      wideBall: Joi.boolean().default(false),
      noBall: Joi.boolean().default(false),
      wicket: Joi.boolean().default(false),
      wicketType: Joi.string().allow(null), // Optional
      wicketOtherPlayer: Joi.string().allow(null), // Optional
    })
  ),
  tossWon: Joi.string().allow(null), // Optional
  teamACaptain: Joi.string().allow(null), // Optional
  teamAWC: Joi.string().allow(null), // Optional
  teamBCaptain: Joi.string().allow(null), // Optional
  teamBWC: Joi.string().allow(null), // Optional
  status: Joi.string()
    .valid("Not Started", "In Progress", "Completed")
    .default("Not Started"),
});

// Validation schema for updating a match
const updateMatchSchema = Joi.object({
  isIndividual: Joi.boolean(),
  tournament: Joi.string().allow(null),
  teamA: Joi.string(),
  teamAsquad: Joi.array().items(Joi.string()),
  teamB: Joi.string(),
  teamBsquad: Joi.array().items(Joi.string()),
  numberOfOver: Joi.number().integer().min(0),
  city: Joi.string(),
  ground: Joi.string(),
  date: Joi.date(),
  ballType: Joi.string().valid("Tennis", "Leather", "Plastic"),
  pitchType: Joi.string().valid("Cement", "Grass", "Artificial"),
  matchType: Joi.string().valid("Limited Over", "Test Match", "T20"),
  currentState: Joi.object({
    currentBowler: Joi.string().allow(null),
    currentWicketKeeper: Joi.string().allow(null),
    nonStriker: Joi.string().allow(null),
    striker: Joi.string().allow(null),
    currentBattingTeam: Joi.string().allow(null),
    currentBowlingTeam: Joi.string().allow(null),
  }),
  teamScores: Joi.array().items(
    Joi.object({
      teamId: Joi.string().allow(null),
      runs: Joi.number().integer(),
      wickets: Joi.number().integer(),
      overs: Joi.number().integer(),
      balls: Joi.number().integer(),
      totalSixes: Joi.number().integer(),
      totalFours: Joi.number().integer(),
      totalWides: Joi.number().integer(),
      totalNoBalls: Joi.number().integer(),
    })
  ),
  playerScores: Joi.array().items(
    Joi.object({
      playerId: Joi.string().allow(null),
      runScore: Joi.number().integer(),
      fours: Joi.number().integer(),
      sixes: Joi.number().integer(),
      WicketType: Joi.string().allow(null),
      wicketTakenBy: Joi.string().allow(null),
      wicketTakenByOtherPlayer: Joi.string().allow(null),
      runGiven: Joi.number().integer(),
      wicketTaken: Joi.object({
        bowlerId: Joi.string().allow(null),
        batsmanId: Joi.string().allow(null),
        typeOfWicket: Joi.string().allow(null),
        fielderId: Joi.string().allow(null),
      }),
      foursGiven: Joi.number().integer(),
      sixesGiven: Joi.number().integer(),
      wideBall: Joi.number().integer(),
      noBalls: Joi.number().integer(),
      balls: Joi.number().integer(),
      wickets: Joi.number().integer(),
    })
  ),
  ballByBall: Joi.array().items(
    Joi.object({
      bowlerId: Joi.string().allow(null),
      batsMen: Joi.object({
        strikerId: Joi.string().allow(null),
        nonStrikerId: Joi.string().allow(null),
      }),
      run: Joi.number().integer(),
      six: Joi.boolean(),
      four: Joi.boolean(),
      wideBall: Joi.boolean(),
      noBall: Joi.boolean(),
      wicket: Joi.boolean(),
      wicketType: Joi.string(),
      wicketOtherPlayer: Joi.string().allow(null),
    })
  ),
  tossWon: Joi.string().allow(null),
  teamACaptain: Joi.string().allow(null),
  teamAWC: Joi.string().allow(null),
  teamBCaptain: Joi.string().allow(null),
  teamBWC: Joi.string().allow(null),
  status: Joi.string().valid("Not Started", "In Progress", "Completed"),
});

// Export schemas
module.exports = {
  createMatchSchema,
  updateMatchSchema,
};
