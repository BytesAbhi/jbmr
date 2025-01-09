const Joi = require("joi");

// Define the tournament DTO schema
const tournamentSchema = Joi.object({
  tournamentBanner: Joi.object()
    .optional()
    .messages({
      "object.base": "File must be an object if provided.",
    })
    .custom((value, helpers) => {
      if (value) {
        if (value.size > 10 * 1024 * 1024) {
          return helpers.error("any.invalid", {
            message: "File size is too large",
          });
        }
        if (!["image/jpeg", "image/png", "image/gif"].includes(value.type)) {
          return helpers.error("any.invalid", {
            message: "Unsupported File Format",
          });
        }
      }
      return value; // Return the value if no errors
    }),
  tournamentLogo: Joi.object()
    .optional()
    .messages({
      "object.base": "File must be an object if provided.",
    })
    .custom((value, helpers) => {
      if (value) {
        if (value.size > 10 * 1024 * 1024) {
          return helpers.error("any.invalid", {
            message: "File size is too large",
          });
        }
        if (!["image/jpeg", "image/png", "image/gif"].includes(value.type)) {
          return helpers.error("any.invalid", {
            message: "Unsupported File Format",
          });
        }
      }
      return value; // Return the value if no errors
    }),
  tournamentName: Joi.string().min(3).max(100).required(), // Tournament name with length constraints
  tournamentCity: Joi.string().min(2).max(50).required(), // City name with length constraints
  tournamentGround: Joi.string().min(2).max(100).required(), // Ground name with length constraints
  tournamentOrganizer: Joi.string().min(3).max(100).required(), // Organizer name with length constraints
  tournamentOrganizerContactNumber: Joi.string()
    .pattern(/^[0-9]{10}$/) // Must be a 10-digit number
    .required(), // Required field
  tournamentStartDate: Joi.date().required(), // Start date must be a valid date
  tournamentEndDate: Joi.date()
    .greater(Joi.ref("tournamentStartDate")) // End date must be after start date
    .required(), // Required field
  tournamentCategory: Joi.string().min(3).max(50).required(), // Category with length constraints
  ballType: Joi.string().min(3).max(50).required(), // Ball type with length constraints
  pitchType: Joi.string().min(3).max(50).required(), // Pitch type with length constraints
  matchType: Joi.string().min(3).max(50).required(), // Match type with length constraints
  ownerId: Joi.string().optional(), // Optional owner ID
});

// Export the schema for use in other parts of the application
module.exports = { tournamentSchema };
