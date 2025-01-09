const Joi = require("joi");

// DTO for adding runs
const addRunDto = Joi.object({
  matchId: Joi.string().required().messages({
    "any.required": "Match ID is required",
    "string.base": "Match ID must be a string",
  }),
  playerId: Joi.string().required().messages({
    "any.required": "Player ID is required",
    "string.base": "Player ID must be a string",
  }),
  runs: Joi.number().min(0).required().messages({
    "any.required": "Runs are required",
    "number.base": "Runs must be a number",
    "number.min": "Runs cannot be less than 0",
  }),
});

// DTO for adding a boundary
const addBoundaryDto = Joi.object({
  matchId: Joi.string().required().messages({
    "any.required": "Match ID is required",
    "string.base": "Match ID must be a string",
  }),
  playerId: Joi.string().required().messages({
    "any.required": "Player ID is required",
    "string.base": "Player ID must be a string",
  }),
  boundaryType: Joi.string()
    .valid("four", "six")
    .required()
    .messages({
      "any.required": "Boundary type is required",
      "string.base": "Boundary type must be a string",
      "any.only": "Boundary type must be either 'four' or 'six'",
    }),
});

// DTO for adding a wicket
const addWicketDto = Joi.object({
  matchId: Joi.string().required().messages({
    "any.required": "Match ID is required",
    "string.base": "Match ID must be a string",
  }),
  bowlerId: Joi.string().required().messages({
    "any.required": "Bowler ID is required",
    "string.base": "Bowler ID must be a string",
  }),
  batsmanId: Joi.string().required().messages({
    "any.required": "Batsman ID is required",
    "string.base": "Batsman ID must be a string",
  }),
  wicketType: Joi.string()
    .valid("bowled", "caught", "lbw", "stumped", "runout", "hitWicket")
    .required()
    .messages({
      "any.required": "Wicket type is required",
      "string.base": "Wicket type must be a string",
      "any.only":
        "Wicket type must be one of 'bowled', 'caught', 'lbw', 'stumped', 'runout', or 'hitWicket'",
    }),
  fielderId: Joi.string().optional().messages({
    "string.base": "Fielder ID must be a string",
  }),
});

// DTO for adding extra runs (wide balls, no balls)
const otherBallsDto = Joi.object({
  matchId: Joi.string().required().messages({
    "any.required": "Match ID is required",
    "string.base": "Match ID must be a string",
  }),
  bowlerId: Joi.string().required().messages({
    "any.required": "Bowler ID is required",
    "string.base": "Bowler ID must be a string",
  }),
  extraType: Joi.string()
    .valid("wideBall", "noBall")
    .required()
    .messages({
      "any.required": "Extra type is required",
      "string.base": "Extra type must be a string",
      "any.only": "Extra type must be either 'wideBall' or 'noBall'",
    }),
  runs: Joi.number().min(0).optional().messages({
    "number.base": "Runs must be a number",
    "number.min": "Runs cannot be less than 0",
  }),
});

// DTO for updating overs
const overUpdateDto = Joi.object({
  matchId: Joi.string().required().messages({
    "any.required": "Match ID is required",
    "string.base": "Match ID must be a string",
  }),
  score: Joi.array()
    .items(
      Joi.object({
        bowler: Joi.object({
          bowlerId: Joi.string().required().messages({
            "any.required": "Bowler ID is required",
            "string.base": "Bowler ID must be a string",
          }),
        }),
        batsMen: Joi.object({
          strikerId: Joi.string().required().messages({
            "any.required": "Striker ID is required",
            "string.base": "Striker ID must be a string",
          }),
        }),
        run: Joi.number().min(0).optional().messages({
          "number.base": "Runs must be a number",
          "number.min": "Runs cannot be less than 0",
        }),
        wicket: Joi.boolean().optional().messages({
          "boolean.base": "Wicket must be a boolean",
        }),
        wicketType: Joi.string()
          .valid("bowled", "caught", "lbw", "stumped", "runout", "hitWicket")
          .optional()
          .messages({
            "string.base": "Wicket type must be a string",
            "any.only":
              "Wicket type must be one of 'bowled', 'caught', 'lbw', 'stumped', 'runout', or 'hitWicket'",
          }),
        wicketOtherPlayer: Joi.string().optional().messages({
          "string.base": "Wicket other player ID must be a string",
        }),
        otherBall: Joi.boolean().optional().messages({
          "boolean.base": "Other ball must be a boolean",
        }),
        otherBallType: Joi.string()
          .valid("wideBall", "noBall")
          .optional()
          .messages({
            "string.base": "Other ball type must be a string",
            "any.only": "Other ball type must be either 'wideBall' or 'noBall'",
          }),
      })
    )
    .required()
    .messages({
      "any.required": "Score data is required",
      "array.base": "Score must be an array of objects",
    }),
});

// Export DTOs
module.exports = {
  addRunDto,
  addBoundaryDto,
  addWicketDto,
  otherBallsDto,
  overUpdateDto,
};
