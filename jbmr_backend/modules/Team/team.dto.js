const Joi = require('joi');

const createTeamSchema = Joi.object({
file: Joi.object().optional().messages({
    'object.base': 'File must be an object if provided.'
  }).custom((value, helpers) => {
    if (value) {
      if (value.size > 10 * 1024 * 1024) {
        return helpers.error('any.invalid', { message: 'File size is too large' });
      }
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(value.type)) {
        return helpers.error('any.invalid', { message: 'Unsupported File Format' });
      }
    }
    return value; // Return the value if no errors
  }),
    teamName: Joi.string().min(3).max(30).required(), // Team name with length constraints
    teamCity: Joi.string().min(2).max(50).required(), // City name with length constraints
    teamContactNumber: Joi.string().length(10).optional(), // 10-digit contact number
    teamCaptainName: Joi.string().optional(), // Optional captain name
    addMyself: Joi.boolean().default(false) // Flag to add myself, defaults to false
});

const playerIndentity = Joi.object({
    phone: Joi.string()
    .required().messages({
      'string.base': 'Phone number must be a string.',
      'any.required': 'Phone number is required.',
      'string.pattern.base': 'Phone number must be digits.',
      'string.length': 'Phone number must be exactly 10 digits.'
    })
    .pattern(/^[0-9]+$/)
    .length(10),
    email: Joi.string()
    .email().required().messages({
      'string.email': 'Please provide a valid email address.',
      'any.required': 'Email is required.'
    }),
})

// Export the schema for use in other parts of the application
module.exports = { createTeamSchema,playerIndentity };